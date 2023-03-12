/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import FormatAlignLeft from "@mui/icons-material/FormatAlignLeft";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "../../components/Blog/Header";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
// sections for this page
import SectionText from "/pages-sections/blog-post/SectionText.js";
import SectionBlogInfo from "/pages-sections/blog-post/SectionBlogInfo.js";
import SectionComments from "/pages-sections/blog-post/SectionComments.js";
import SectionSimilarStories from "/pages-sections/blog-post/SectionSimilarStories.js";

import blogPostPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";
import Article from "../../components/Blog/Article";
import PostSuggestions from "../../components/Blog/PostSuggestions";
import {groq} from "next-sanity";
import sanityClient from "../../lib/sanityClient";
import {urlFor} from "../../lib/urlFor";
import {main} from "../../styles/jss/nextjs-material-kit-pro";

const useStyles = makeStyles(blogPostPageStyle);

export default function Post({post, otherPosts}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const {body, mainImage, categories, publishedAt, slug, title} = post;

  const imageSrc = mainImage ? urlFor(mainImage).width(1200).url() : null;
  const blurImageSrc = mainImage ? urlFor(mainImage).width(24).height(24).blur(10).url() : null;

  return (
    <div>
      <Header
          brand='Mastela'
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
      />
      <Parallax image={imageSrc} filter="dark">
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                {title}
              </h1>
              {/*<h4 className={classes.subtitle}>*/}
              {/*  The last 48 hours of my life were total madness. This is what I*/}
              {/*  did.*/}
              {/*</h4>*/}
              <br />
              <Button color="rose" size="lg" round>
                <FormatAlignLeft /> Read Article
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <Article body={body}/>
          <SectionBlogInfo />
          <PostSuggestions posts={otherPosts}/>
          {/*<SectionComments />*/}
        </div>
      </div>
      {/*<SectionSimilarStories />*/}
      <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                        href="https://mastelavacations.com"
                        target="_blank"
                        className={classes.block}
                    >
                      Home
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                        href="https://mastelavacations.com/vacation-rentals.php"
                        target="_blank"
                        className={classes.block}
                    >
                      Our Villas
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                        href="/cape-coral-guide"
                        className={classes.block}
                    >
                      Local Area Guide
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                        href="https://mastelavacations.com/contact-us.html"
                        target="_blank"
                        className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}, powered by{" "}
                <a
                    href="https://strukter.io"
                    target="_blank"
                >
                  Strukter
                </a>
              </div>
            </div>
          }
      />
    </div>
  );
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    "name": author->name,
    "categories": categories[]->title,
    mainImage,
    body
}`

const querySuggestions = groq`*[_type == "post" && slug.current != $slug][0...3] {
    title,
    slug,
    author-> {name},
    mainImage,
    categories[]-> {
      title,
      description
    },
    publishedAt,
    body
}`

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
      groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const { slug = "" } = context.params // Default the slug so that it doesn't return "undefined"

  const post = await sanityClient.fetch(query, { slug })
  const otherPosts = await sanityClient.fetch(querySuggestions, { slug })

  return {
    props: {
      post,
      otherPosts
    }
  }
}