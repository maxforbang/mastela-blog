import React from "react";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
// core components
import GridContainer from "/components/KitComponents/NextKit/Grid/GridContainer.js";
import GridItem from "/components/KitComponents/NextKit/Grid/GridItem.js";
import Card from "/components/KitComponents/NextKit/Card/Card.js";
import CardAvatar from "/components/KitComponents/NextKit/Card/CardAvatar.js";

import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function SectionBlogInfo() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            {/*<GridItem xs={12} sm={6} md={6}>*/}
            {/*  <div className={classes.blogTags}>*/}
            {/*    {'Tags: '}*/}
            {/*    <Badge color="primary">Photography</Badge>*/}
            {/*    <Badge color="primary">Stories</Badge>*/}
            {/*    <Badge color="primary">Castle</Badge>*/}
            {/*  </div>*/}
            {/*</GridItem>*/}
            {/*<GridItem xs={12} sm={6} md={6}>*/}
            {/*  <Button color="google" round className={classes.buttons}>*/}
            {/*    <i className="fab fa-google" /> 232*/}
            {/*  </Button>*/}
            {/*  <Button color="twitter" round className={classes.buttons}>*/}
            {/*    <i className="fab fa-twitter" /> 910*/}
            {/*  </Button>*/}
            {/*  <Button color="facebook" round className={classes.buttons}>*/}
            {/*    <i className="fab fa-facebook-square" /> 872*/}
            {/*  </Button>*/}
            {/*</GridItem>*/}
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <a href='https://mastelavacations.com'>
                  <img src="/img/blog/Mastela-Logo-Square.png" alt="..." style={{height: 'auto'}}/>
                  </a>
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>Mastela Vacations</h4>
                <p className={classes.description}>
                  Mastela Vacations is all about taking the Cape Coral Experience to the next level with great spaces, and even better memories. If you have any questions about Cape Coral or the surrounding area, please don't hesitate to <a href='https://mastelavacations.com/contact-us.html'>contact us.</a>
                </p>
              </GridItem>
              {/*<GridItem xs={12} sm={2} md={2}>*/}
              {/*  <Button round className={classes.pullRight}>*/}
              {/*    Follow*/}
              {/*  </Button>*/}
              {/*</GridItem>*/}
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
