/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Blog/Header/Header.js";
import HeaderLinks from "/components/Blog/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import BlogPostsList from "/components/Blog/BlogPostsList.js";
import SectionImage from "/components/Blog/SectionImage.js";
import SubscribeLine from "/components/Blog/SubscribeLine.js";

import blogPostsPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle.js";
import {createClient, groq} from "next-sanity";
import sanityClient from "../../lib/sanityClient";
import Link from "next/link";

const useStyles = makeStyles(blogPostsPageStyle);

export default function Home({posts}) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

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
        <Parallax image="https://ik.imagekit.io/mastela/tr:w-1800/Villa_Encore/64-Photo_64.jpg" filter="dark" small>
          <div className={classes.container}>
            <GridContainer justifyContent="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>
                  Everything You Need to Make the Most Out of Your Stay in Cape Coral
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <BlogPostsList posts={posts} />
          </div>
          <SectionImage />
          <SubscribeLine />
        </div>
        <Footer
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="/">
                        <a className={classes.block}>
                          Home
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="/pages/search-results">
                        <a className={classes.block}>
                          Our Villas
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="/cape-coral-local-area-guide">
                        <a className={classes.block}>
                          Local Area Guide
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="/pages/about-us">
                        <a className={classes.block}>
                          About Us
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="/pages/contact-us">
                        <a className={classes.block}>
                          Contact Us
                        </a>
                      </Link>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <Link href="tel:+1(813)9957240">
                        <a className={classes.block}>
                          +1 (813) 995 7240
                        </a>
                      </Link>
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

const query = groq`
  *[_type == "post"] {
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
  }
`;

export async function getStaticProps() {
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  };
}
