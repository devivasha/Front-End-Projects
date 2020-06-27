import { Button, withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

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
    width: "336px",
    height: "120px",
    backgroundColor: "#FFFFFF",
    zIndex: "501",
    position: 'absolute',
    marginTop:'10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    "@media (min-width:320px)": {
      width: "341px",
      height: "155px",
    },
    "@media (min-width:700px)": {
      width: "430px",
      height: "189px",
    },
    "@media (min-width:1200px)": {
      width: "500px",
      height: "200px",
    },
    "@media (min-width:1400px)": {
      width: "500px",
      height: "200px",
    },

    "@media (min-width:1600px)": {
      width: "500px",
      height: "200px",
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "113px",
    margin: "8px auto",
    "@media (min-width:320px)": {
      width: "160px",
      margin: "20px auto",
      paddingBottom: 10,
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
    width: "8px",
    height: "8px",
    marginTop: "10px",
    marginRight: "10px",
    cursor: "pointer",
    "@media (min-width:480px)": {
      width: "9px",
      height: "9px",
      marginTop: "10px",
      marginRight: "10px",
    },
    "@media (min-width:700px)": {
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
    fontSize: "12px",
    marginTop: "25px",
    marginLeft: "10px",
    lineHeight: "16px",
    textAlign: "center",
    color: "#000000",
    "&::before": {
      width: "24px",
      height: "13px",
      marginRight: "6px",
      content: 'url("/images/tick.svg")',
    },
    "@media (min-width:480px)": {
      fontSize: "13px",
      marginTop: "25px",
      marginLeft: "10px",
      "&::before": {
        width: "26px",
        height: "16px",
        marginRight: "10px",
      },
    },
    "@media (min-width:700px)": {
      fontSize: "16px",
      marginTop: "58px",
      "&::before": {
        width: "28px",
        height: "17px",
        marginRight: "12px",
      },
    },
    "@media (min-width:1200px)": {
      fontSize: "16px",
      marginTop: "58px",
      "&::before": {
        width: "30px",
        height: "20px",
        marginRight: "14px",
      },
    },
  },
}));

const StyledButton = withStyles({
  root: {
    position: "relative",
    marginTop: 10,
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
      height: "40px",
      width: "100px",
      margin: "10 auto",
    },

    "@media (min-width:1200px)": {
      fontSize: "16px",
      height: "45px",
      width: "113px",
    },
  },
})(Button);

export default function CustomInfoWindow({ text, onClick }) {
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
          component={Link}
          to="/"
          onClick={onClick}
        />
        <Typography variant="body1" className={textClasses.textInModal}>
          {text}
        </Typography>
        <Box className={textClasses.buttonsContainer}>
          <StyledButton variant="outlined" color="secondary" onClick={onClick}>
            Got It
          </StyledButton>
        </Box>
      </Box>
    </>
  );
}
