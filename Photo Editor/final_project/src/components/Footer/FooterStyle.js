const footerStyle = (theme) => ({
  root: {
    textAlign: "center",
    height: "256px",
    background: "#f2f2f2",
    alignItems: "center",
  },

  myfooter: {},

  mywrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: "239px",
    backgroundColor: "#f2f2f2",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      paddingTop: "30px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "20px 110px 0 77px",
    },
  },

  item: {
    fontSize: "15px",
    padding: "1rem 0 1rem 0",
    margin: "10px",
    flex: "1 1 auto",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      padding: "0px",
    },
  },

  navItem: {
    fontSize: "15px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0 0 40px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "0px",
    },
    "@media (min-width:320px)": {
      display: "none",
    },
    "@media (min-width:600px)": {
      fontSize: 16,
      paddingLeft: 20,
      paddingRight: 0,
      display: "block",
      paddingTop: 22,
    },
    "@media (min-width:1200px)": {
      fontSize: 15,
      paddingLeft: 20,
      paddingRight: 0,
      display: "block",
      margin: 0,
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
    },
  },

  logoItem: {
    margin: 0,
    textAlign: "left",
    paddingLeft: "20px",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "20px",
      textAlign: "center",
    },
  },

  container1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  logoAndMenuWrapper: {
    display: "flex",
  },

  container2: {
    display: "flex",

    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    paddingRight: "20",
    [theme.breakpoints.down("sm")]: {
      // textAlign: 'left',
      justifyContent: "flex-start",

      alignItems: "center",
    },
  },
  copyRight: {
    display: "inline-block",
    float: "left",
  },

  empty: {
    height: "8em",
  },

  Active: {
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "underline",
    color: "#9595A8",
    fontWeight: "500",
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

  copyright: {
    fontSize: 13,
    color: "#7A7A7A",
    margin: "auto",
    marginTop: "7em",
    paddingLeft: 20,
    [theme.breakpoints.down("md")]: {
      marginTop: "5em",
    },
    "@media (min-width:320px)": {
      paddingLeft: 70,
    },
    "@media (min-width:768px)": {
      paddingLeft: 20,
    },

  },

  linkStyle: {
    fontFamily: "Montserrat",
    marginLeft: "33px",
    textDecoration: "none",
    color: "#212052",
    fontWeight: "500",
    "&:hover,&:focus": {
      color: "#9595A8",
      textDecoration: "none",
    },
    "&:active": {
      color: "#EA4165",
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
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "49px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },

  buttonStyle: {
    lineHeight: "0px",
    fontFamily: "Montserrat",
    textTransform: "none",
    textDecoration: "none",
    marginLeft: "33px",
    color: "#212052",
    fontWeight: "500",
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
  },
});

export default footerStyle;
