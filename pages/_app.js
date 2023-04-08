/*!

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import PageChange from "/components/KitComponents/NextKit/PageChange/PageChange.js";

import "/styles/scss/nextjs-material-kit-pro.scss";

import "/styles/css/react-demo.css";

import "animate.css/animate.min.css";

import"/styles/mastela/navigation.css"
import colors from "/styles/theme/base/colors";
import breakpoints from "/styles/theme/base/breakpoints";
import typography from "/styles/theme/base/typography";
import boxShadows from "/styles/theme/base/boxShadows";
import borders from "/styles/theme/base/borders";
import globals from "/styles/theme/base/globals";

// Material Kit 2 PRO React helper functions
import boxShadow from "/styles/theme/functions/boxShadow";
import hexToRgb from "/styles/theme/functions/hexToRgb";
import linearGradient from "/styles/theme/functions/linearGradient";
import pxToRem from "/styles/theme/functions/pxToRem";
import rgba from "/styles/theme/functions/rgba";

// Material Kit 2 PRO React components base styles for @mui material components
import list from "/styles/theme/components/list";
import listItem from "/styles/theme/components/list/listItem";
import listItemText from "/styles/theme/components/list/listItemText";
import card from "/styles/theme/components/card";
import cardMedia from "/styles/theme/components/card/cardMedia";
import cardContent from "/styles/theme/components/card/cardContent";
import button from "/styles/theme/components/button";
import iconButton from "/styles/theme/components/iconButton";
import input from "/styles/theme/components/form/input";
import inputLabel from "/styles/theme/components/form/inputLabel";
import inputOutlined from "/styles/theme/components/form/inputOutlined";
import textField from "/styles/theme/components/form/textField";
import menu from "/styles/theme/components/menu";
import menuItem from "/styles/theme/components/menu/menuItem";
import switchButton from "/styles/theme/components/form/switchButton";
import divider from "/styles/theme/components/divider";
import tableContainer from "/styles/theme/components/table/tableContainer";
import tableHead from "/styles/theme/components/table/tableHead";
import tableCell from "/styles/theme/components/table/tableCell";
import linearProgress from "/styles/theme/components/linearProgress";
import breadcrumbs from "/styles/theme/components/breadcrumbs";
import slider from "/styles/theme/components/slider";
import avatar from "/styles/theme/components/avatar";
import tooltip from "/styles/theme/components/tooltip";
import appBar from "/styles/theme/components/appBar";
import tabs from "/styles/theme/components/tabs";
import tab from "/styles/theme/components/tabs/tab";
import stepper from "/styles/theme/components/stepper";
import step from "/styles/theme/components/stepper/step";
import stepConnector from "/styles/theme/components/stepper/stepConnector";
import stepLabel from "/styles/theme/components/stepper/stepLabel";
import stepIcon from "/styles/theme/components/stepper/stepIcon";
import select from "/styles/theme/components/form/select";
import formControlLabel from "/styles/theme/components/form/formControlLabel";
import formLabel from "/styles/theme/components/form/formLabel";
import checkbox from "/styles/theme/components/form/checkbox";
import radio from "/styles/theme/components/form/radio";
import autocomplete from "/styles/theme/components/form/autocomplete";
import flatpickr from "/styles/theme/components/flatpickr";
import container from "/styles/theme/components/container";
import popover from "/styles/theme/components/popover";
import buttonBase from "/styles/theme/components/buttonBase";
import icon from "/styles/theme/components/icon";
import svgIcon from "/styles/theme/components/svgIcon";
import link from "/styles/theme/components/link";
import dialog from "/styles/theme/components/dialog";
import dialogTitle from "/styles/theme/components/dialog/dialogTitle";
import dialogContent from "/styles/theme/components/dialog/dialogContent";
import dialogContentText from "/styles/theme/components/dialog/dialogContentText";
import dialogActions from "/styles/theme/components/dialog/dialogActions";
import swiper from "/styles/theme/components/swiper";

const theme = createTheme({
  palette: { ...colors },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  typography: { ...typography },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
  components: {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
      ...select
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fff !important",
          },
        },
      },
      ...tab
    },
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
        ...swiper,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/*<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" />*/}
          <title>Cape Coral Area Guide</title>
        </Head>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <Component {...pageProps} />
          </StyledEngineProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
