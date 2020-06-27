import { container, title } from "../../assets/jss/material-kit-react.js";
import headerLinksStyle from "../../assets/jss/headerLinksStyle.js";

const navbarsStyle = (theme) => ({
  section: {
    padding: "0px 0",
    paddingTop: "0",
  },
  container,
  title: {
    ...title,
    marginTop: "300px",
    minHeight: "32px",
    textDecoration: "none",
  },
  navbar: {
    height: 100,
    marginBottom: "-105px",
    marginRight: "20",
    position: "relative",
    zIndex: "100",
    overflow: "hidden",
    "& header": {
      borderRadius: "0",
    },
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "40px",
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0",
  },
  inputRootCustomClasses: {
    margin: "0!important",
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit",
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px",
  },

  buttonStyle: {
    // padding: '0',
    // paddingBottom: "10px",
    fontSize: 14,
    lineHeight: "0px",
    fontFamily: "Montserrat",
    textTransform: "none",
    textDecoration: "none",
    marginLeft: "33px",
    color: "#212052",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      paddingBottom: "10px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "&:hover,&:focus": {
      color: "#212052",
      textDecoration: "underline",
    },
    "&:active": {
      color: "#EA4165",
      // background: "rgba(200, 200, 200, 0.2)"
    },
  },

  linkStyle: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "none",
    color: "#212052",
    fontWeight: "600",
    "&:hover,&:focus": {
      color: "#212052",
      textDecoration: "underline",
      // background: "rgba(200, 200, 200, 0.2)"
    },
    "&:active": {
      color: "#EA4165",
      // background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  linkStyleEdit: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "none",
    color: "#ea4165",
    fontWeight: "600",
    "&:hover,&:focus": {
      color: "#EA4165",
      textDecoration: "underline",
      // background: "rgba(200, 200, 200, 0.2)"
    },
    "&:active": {
      color: "#EA4165",
      // background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  Active: {
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "underline",
    color: "#212052",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  ActiveEdit: {
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "underline",
    color: "#ea4165",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
});

export default navbarsStyle;
