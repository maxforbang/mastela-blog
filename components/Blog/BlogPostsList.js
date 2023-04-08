import React from "react";
import makeStyles from "@mui/styles/makeStyles";

import GridContainer from "/components/KitComponents/NextKit/Grid/GridContainer.js";
import GridItem from "/components/KitComponents/NextKit/Grid/GridItem.js";
import sectionPillsStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js";
import BlogPostsListItemRow from "./BlogPostsListItemRow";
const useStyles = makeStyles(sectionPillsStyle);

export default function BlogPostsList({posts}) {
  const classes = useStyles();

  const postsList = posts.map((post) => {
      return <BlogPostsListItemRow post={post} key={post.slug.current}/>
  })

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          {/*<NavPills*/}
          {/*  alignCenter*/}
          {/*  tabs={[*/}
          {/*    {*/}
          {/*      tabButton: "All",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      tabButton: "Beaches",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      tabButton: "Activities",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      tabButton: "Dining",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      tabButton: "Shopping",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*    {*/}
          {/*      tabButton: "Fitness",*/}
          {/*      tabContent: "",*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer >
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer >
            <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest Posts</h2>
              <br />
                {postsList}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
