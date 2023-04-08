/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Header from "../components/Shared/Header/Header";
import Parallax from "../components/KitComponents/NextKit/Parallax/Parallax";
import HeaderLinks from "../components/Shared/Header/HeaderLinks";
import GridContainer from "../components/KitComponents/NextKit/Grid/GridContainer";
import GridItem from "../components/KitComponents/NextKit/Grid/GridItem";
import Footer from "../components/KitComponents/NextKit/Footer/Footer";
import profilePageStyle from "../styles/jss/nextjs-material-kit-pro/pages/profilePageStyle";
import Link from "next/link";
import Places from "../components/Shared/SearchRentals/sections/Places";
import Search from "../components/Shared/SearchRentals/sections/Search";

const useStyles = makeStyles(profilePageStyle);

export default function Home({ ...rest }) {
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
                Experience Your Dream Vacation Home
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
          <div className={classNames(classes.mainRaised, classes.searchBar)}>
            <Search/>
          </div>
        <Places/>
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
