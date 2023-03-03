import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import TrendingUp from "@mui/icons-material/TrendingUp";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Info from "/components/Typography/Info.js";
import Success from "/components/Typography/Success.js";
import Danger from "/components/Typography/Danger.js";

import sectionInterestedStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionInterestedStyle.js";
import BlogPostsListItemRow from "./BlogPostsListItemRow";
import BlogPostsListItemColumn from "./BlogPostsListItemColumn";

const useStyles = makeStyles(sectionInterestedStyle);

export default function PostSuggestions({posts}) {
  const classes = useStyles();

  const postsList = posts.map((post) => {
    return <BlogPostsListItemColumn post={post}/>
  })

  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>
        You may also be interested in
      </h3>
      <br />
      <GridContainer>
        {postsList}
      </GridContainer>
    </div>
  );
}
