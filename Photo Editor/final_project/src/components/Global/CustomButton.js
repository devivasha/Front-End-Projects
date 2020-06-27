import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledButton = withStyles({
  root: {
    borderRadius: 1.4,
    border: "1.4px solid #EA4165",
    height: 53,
    width: 193,
    fontFamily: "Montserrat, sans-serif",
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 600,
    marginTop: 30,
    fontSize: 18,
    color: "#EA4165",
    textDecoration: "none",
    boxShadow: "0 4px 26px rgba(198, 170, 176, 0.16)",
    "&:hover": {
      backgroundColor: "#EA4165",
      color: "#FFF",
      textDecoration: "none",
    },
    label: {
      textDecoration: "none",
      "&:link": {
        textDecoration: "none",
      },
      "&:visited": {
        textDecoration: "none",
      },
      "&:active": {
        textDecoration: "none",
      },
    },
    '@media (max-width:960px)': {
      position: "relative",
      marginLeft: '50%',
      transform: "translateX(-50%)",

    },
  },
})(Button);

export default function CustomButton({ title, type = "button", onClick }) {
  const classes = withStyles();
  return (
    <div className={classes.root}>
      <StyledButton variant="outlined" type={type} onClick={onClick}>
        {title}
      </StyledButton>
    </div>
  );
}
