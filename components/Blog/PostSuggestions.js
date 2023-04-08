import React from "react";
import makeStyles from '@mui/styles/makeStyles';

import GridContainer from "/components/KitComponents/NextKit/Grid/GridContainer.js";


import sectionInterestedStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionInterestedStyle.js";
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
