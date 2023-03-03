import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';

// core components
import styles from "/styles/jss/nextjs-material-kit-pro/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  let windowScrollTop = 0;
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}
    >
      <picture>
        <source srcSet="
                    https://ik.imagekit.io/mastela/tr:w-190/Villa_Encore/64-Photo_64.jpg 190w,
                    https://ik.imagekit.io/mastela/tr:w-571/Villa_Encore/64-Photo_64.jpg 571w,
                    https://ik.imagekit.io/mastela/tr:w-785/Villa_Encore/64-Photo_64.jpg 785w,
                    https://ik.imagekit.io/mastela/tr:w-978/Villa_Encore/64-Photo_64.jpg 978w,
                    https://ik.imagekit.io/mastela/tr:w-1145/Villa_Encore/64-Photo_64.jpg 1145w,
                    https://ik.imagekit.io/mastela/tr:w-1303/Villa_Encore/64-Photo_64.jpg 1303w,
                    https://ik.imagekit.io/mastela/tr:w-1485/Villa_Encore/64-Photo_64.jpg 1485w,
                    https://ik.imagekit.io/mastela/tr:w-1569/Villa_Encore/64-Photo_64.jpg 1569w,
                    https://ik.imagekit.io/mastela/tr:w-1718/Villa_Encore/64-Photo_64.jpg 1718w,
                    https://ik.imagekit.io/mastela/tr:w-1800/Villa_Encore/64-Photo_64.jpg 1800w,
                    https://ik.imagekit.io/mastela/tr:w-2500/Villa_Encore/64-Photo_64.jpg 2500w"
                />
      </picture>
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf([
    "primary",
    "rose",
    "dark",
    "info",
    "success",
    "warning",
    "danger"
  ]),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
