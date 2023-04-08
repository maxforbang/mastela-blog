/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material

import Favorite from "@mui/icons-material/Favorite";
// core components


import Header from "../components/Shared/Header/Header";
import Parallax from "../components/KitComponents/NextKit/Parallax/Parallax";
import HeaderLinks from "../components/Shared/Header/HeaderLinks";
import GridContainer from "../components/KitComponents/NextKit/Grid/GridContainer";
import GridItem from "../components/KitComponents/NextKit/Grid/GridItem";
import Footer from "../components/KitComponents/NextKit/Footer/Footer";
import Button from "@mui/material/Button";
import {Add} from "@mui/icons-material";
import profilePageStyle from "../styles/jss/nextjs-material-kit-pro/pages/profilePageStyle";
import Link from "next/link";
import {HelpCenter} from "../components/Contact/HelpCenter";
import blogPostsPageStyle from "../styles/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle";
import MKButton from "../components/KitComponents/MK2/MKButton";

const useStyles = makeStyles(blogPostsPageStyle);

export default function ProfilePage({ ...rest }) {
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
                How can we help you?
              </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <MKButton variant="gradient" color="info">
                Contact Us
              </MKButton>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classNames(classes.mainRaised)}>

            <HelpCenter />
        </div>
      </div>
      {/*<div className={classNames(classes.main, classes.mainRaised)}>*/}
      {/*</div>*/}
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
                    <Link href="/search-results">
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
                    <Link href="/about-us">
                      <a className={classes.block}>
                        About Us
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link href="/contact-us">
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
