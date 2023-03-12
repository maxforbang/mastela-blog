/*eslint-disable*/
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Blog/Header/Header";
import HeaderLinks from "/components/Blog/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import errorPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
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
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('https://ik.imagekit.io/mastela/tr:w-1800/Villa_Encore/64-Photo_64.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Page not found :(</h2>
              <h4 className={classes.description}>
                Oops! Looks like you got lost.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
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
                        href="/"
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
