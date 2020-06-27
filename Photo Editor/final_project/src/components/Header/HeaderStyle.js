import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
} from "../../assets/jss/material-kit-react.js";

const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  container: {
    // ...container,
    minHeight: "50px",
    "@media (min-width:320px)": {
      minWidth: 305
    },
    "@media (min-width:360px)": {
      minWidth: 348
    },
    "@media (min-width:375px)": {
      minWidth: 353
    },
    "@media (min-width:414px)": {
      minWidth: 390
    },
    "@media (min-width:600px)": {
      minWidth: 560
    },
    "@media (min-width:700px)": {
      minWidth: 660
    },
    "@media (min-width:900px)": {
      minWidth: 800
    },
    "@media (min-width:1000px)": {
      marginLeft:60,
      minWidth: 890
    },
    "@media (min-width:1100px)": {
      marginLeft:60,
      minWidth: 1000
    },
    "@media (min-width:1200px)": {
      marginLeft:0,
      minWidth: 1050
    },

    // flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
  },

  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontWeight: "900",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent",
    },
  },
  logoMain: {
    "@media (min-width:360px)": {},

    "@media (min-width:960px)": {
      marginRight: 120,
    },
    "@media (min-width:1000px)": {
      marginRight: 50,
    },
    "@media (min-width:1100px)": {
      marginRight: 150,
    },
    "@media (min-width:1200px)": {
      marginRight: 120,
    },
    "@media (min-width:1300px)": {
      marginRight: 230,
    },
    "@media (min-width:1366px)": {
      marginRight: 280,
    },
    "@media (min-width:1400px)": {
      marginRight: 90,
    },
    "@media (min-width:1600px)": {
      marginRight: 280,
    },
    "@media (min-width:1800px)": {
      marginRight: 380,
    },
    "@media (min-width:1920px)": {
      marginRight: 430,
    },
    "@media (min-width:2000px)": {
      marginRight: 80,
    },
  },
  appResponsive: {
    margin: "20px 10px",
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)",
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)",
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)",
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)",
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)",
  },
  rose: {
    backgroundColor: roseColor,
    color: "#FFFFFF",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "11px",
    height:'85px',
    "@media (min-width:767px)": {
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    "@media (min-width:960px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },

    "@media (min-width:1200px)": {
      paddingLeft: "86px",
      paddingRight: "40px",
    },

    "@media (min-width:1600px)": {
      paddingLeft: "124px",
      paddingRight: "40px",
    },
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
  },
};

export default headerStyle;
