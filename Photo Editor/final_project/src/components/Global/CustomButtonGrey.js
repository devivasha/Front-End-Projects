import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    borderRadius: 1.4,
    border: "1px solid #8D8D8D",
    height: '32px',
    width:'124px',
    fontFamily: "Montserrat, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 13,
    color: "#3D3A3A",
    textDecoration:'none',
    text:'+',
    cursor:'pointer',
    "@media (min-width:600px)": {
      height: '32px',
      width:'auto',
      marginTop: 20,
    },
    "@media (min-width:768px)": {
      height: '32px',
      width:'auto',
      marginTop: 20,
    },
    "@media (min-width:960px)": {
      height: '32px',
      width:'auto',
      marginTop: 30,
    },


    "&:hover": {
      backgroundColor: "#3D3A3A",
      color: "#FFFFFF",
      textDecoration: 'none',
    },
    label:{
      textDecoration:'none',
      "&:link": {
        textDecoration: 'none',
      },
      "&:visited": {
        textDecoration: 'none',
      },
      "&:active": {
        textDecoration: 'none',
      },

    }
  },
})(Button);

export default function CustomButtonGrey({ title, type = 'button' }) {
  const classes = withStyles();
  return (
    <div className={classes.root}>
      <StyledButton variant="outlined" type={type}>
        {title}
      </StyledButton>
    </div>
  );
}
