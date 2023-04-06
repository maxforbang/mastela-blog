import React from "react";
import makeStyles from "@mui/styles/makeStyles";

import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";

import sectionPillsStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js";
import CardHeader from "../../components/Card/CardHeader";

import Link from "next/link";

import {urlFor} from "../../lib/urlFor";
import Image from "next/image"

const useStyles = makeStyles(sectionPillsStyle);

export default function BlogPostsListItemColumn({post}) {
  const classes = useStyles();

  const {author, body, mainImage, categories, publishedAt, slug, title} = post;

  const imageSrc = mainImage ? urlFor(mainImage).height(1200).url() : null;
  const blurImageSrc = mainImage ? urlFor(mainImage).width(24).height(24).blur(10).url() : null;


  const publishedDate = new Date(publishedAt)
  let daysAgo = (Date.now() - publishedDate) / (1000 * 60 * 60 * 24);

  let publishedString;

  if (daysAgo >= 7) {
    publishedString = publishedDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  } else if (daysAgo < 1) {
    const hoursAgo = Math.floor(daysAgo * 24)
    if (hoursAgo == 0) {
      publishedString = 'just now'
    } else {
      publishedString = hoursAgo + (hoursAgo == 1 ? ' hour' : ' hours') + ' ago'
    }
  } else {
    daysAgo = Math.floor(daysAgo)
    publishedString =  daysAgo + (daysAgo == 1 ? ' day' : ' days') + ' ago'
  }

  return (
      <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
        <Card plain blog>
          <CardHeader image plain>
            <Link href="/cape-coral-local-area-guide/[slug]" as={`/cape-coral-local-area-guide/${slug.current}`}>
              <a>
                {mainImage ?
                    <Image
                        src={imageSrc}
                        alt={'Cape Coral Vacation with Mastela'}
                        height={249.77}
                        width={375}
                        objectFit='cover'
                        placeholder="blur"
                        blurDataURL={blurImageSrc}
                    />
                    : null}
              </a>
            </Link>
          </CardHeader>
          <CardBody plain>
            {/*<Info>*/}
            {/*  <h6>ENTERPRISE</h6>*/}
            {/*</Info>*/}
            <h4 className={classes.cardTitle}>
              <Link href="/cape-coral-local-area-guide/[slug]" as={`/cape-coral-local-area-guide/${slug.current}`}>
                {title}
              </Link>
            </h4>
            <p className={classes.description}>
              {body[1].children[0].text.substring(0, 266)}…
              <Link href="/cape-coral-local-area-guide/[slug]" as={`/cape-coral-local-area-guide/${slug.current}`}>
                {" Read More"}
              </Link>
            </p>
          </CardBody>
        </Card>
      </GridItem>
  );
}