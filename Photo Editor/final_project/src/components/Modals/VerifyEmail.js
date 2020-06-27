import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  withStyles,
  Button,
  Link,
} from "@material-ui/core";

const textStyle = makeStyles(() => ({
  darkBackgroundForModalWindow: {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    zIndex: "500",
  },
  modalWindow: {
    width: "369px",
    height: "238px",
    backgroundColor: "#FFFFFF",
    position: "fixed",
    zIndex: "1001",
    margin: "183px 50%",
    transform: "translateX(-50%)",
    "@media (min-width:320px)": {
      margin: "0 auto",
      width: "100%",
      height: "470px",
    },
    "@media (min-width:700px)": {
      width: "330px",
      height: "238px",
    },
    "@media (min-width:1200px)": {
      width: "369px",
      height: "238px",
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "113px",
    margin: "8px auto",
    "@media (min-width:480px)": {
      width: "160px",
      margin: "20px auto",
    },
    "@media (min-width:700px)": {
      width: "113px",
      margin: "20px auto",
    },
    "@media (min-width:1200px)": {
      width: "113px",
      margin: "20px auto",
    },
    "@media (max-width:1200px)": {
      width: "113px",
      margin: "20px auto",
    },
  },
  cross: {
    float: "right",
    width: "7px",
    height: "7px",
    marginTop: "10px",
    marginRight: "10px",
    cursor: "pointer",
    "@media (max-width:480px)": {
      width: "17px",
      height: "17px",
      marginTop: "10px",
      marginRight: "10px",
    },
    "@media (max-width:700px)": {
      width: "13px",
      height: "13px",
      marginTop: "18px",
      marginRight: "17px",
    },
    "@media (max-width:1200px)": {
      width: "13px",
      height: "13px",
      marginTop: "18px",
      marginRight: "17px",
    },
    "@media (min-width:1200px)": {
      width: "13px",
      height: "13px",
      marginTop: "18px",
      marginRight: "17px",
    },
  },

  textInModal: {
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "16px",
    textAlign: "center",
    color: "#000000",
    marginTop: "24px",
  },
  resendLinkContainer: {
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "16px",
    textAlign: "center",
    color: "#000000",
    marginTop: "14px",
  },
  resendLink: {
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16px",
    textAlign: "center",
    color: "#EA4165",
    marginTop: "14px",
    cursor: "pointer",
  },
  titleInModal: {
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: "25px",
    lineHeight: "16px",
    textAlign: "center",
    color: "#212052",
    "@media (max-width:480px)": {
      fontSize: "13px",
      marginTop: "25px",
    },
    "@media (max-width:700px)": {
      fontSize: "13px",
      marginTop: "40px",
    },
    "@media (max-width:1200px)": {
      fontSize: "18px",
      marginTop: "40px",
    },
    "@media (min-width:1200px)": {
      fontSize: "18px",
      marginTop: "40px",
    },
  },
}));
const StyledButton = withStyles({
  root: {
    position: "relative",
    borderRadius: 1.4,
    border: "1.4px solid #EA4165",
    fontFamily: "Montserrat, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 600,
    color: "#EA4165",
    fontSize: "10px",
    height: "20px",
    width: "45px",
    padding: 0,
    "&:hover": {
      backgroundColor: "#EA4165",
      color: "#FFF",
    },
    "@media (min-width:320px)": {
      fontSize: "12px",
      height: "38px",
      width: "160px",
      padding: 0,
      marginBottom: "10px",
    },
    "@media (min-width:700px)": {
      fontSize: "14px",
      height: "35px",
      width: "79px",
    },

    "@media (min-width:1200px)": {
      fontSize: "14px",
      height: "35px",
      width: "113px",
    },
  },
})(Button);

export default function VerifyEmailPopup({ onClick, resendConfirmation }) {
  const classes = withStyles();
  const textClasses = textStyle();
  return (
    <>
      <Box
        className={textClasses.darkBackgroundForModalWindow}
        onClick={onClick}
      ></Box>
      <Box className={textClasses.modalWindow}>
        <img
          src="/images/Modals/Vector.svg"
          className={textClasses.cross}
          alt="close"
          onClick={onClick}
        />
        <Typography variant="h1" className={textClasses.titleInModal}>
          Verify your email
        </Typography>
        <Typography variant="body1" className={textClasses.textInModal}>
          Please check your email to verify your account
        </Typography>
        <Typography variant="body1" className={textClasses.resendLinkContainer}>
          <Link onClick={resendConfirmation} className={textClasses.resendLink}>
            Resend Confirmation
          </Link>
        </Typography>
        <Box className={textClasses.buttonsContainer}>
          <div className={classes.root}>
            <StyledButton
              variant="outlined"
              color="secondary"
              onClick={onClick}
            >
              Got It
            </StyledButton>
          </div>
        </Box>
      </Box>
    </>
  );
}
