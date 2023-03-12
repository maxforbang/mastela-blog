import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// core components

import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";
import {PortableText} from "@portabletext/react";

const useStyles = makeStyles(sectionTextStyle);

export default function Article({body}) {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

  // const {
  //   title = 'Missing title',
  //   name = 'Missing name',
  //   categories,
  //   authorImage,
  //   body = []
  // } = post

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <PortableText value={body} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
