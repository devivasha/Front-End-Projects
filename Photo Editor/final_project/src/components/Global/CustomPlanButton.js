import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    boxShadow: "0 4px 26px rgba(198, 170, 176, 0.19)",
    fontSize: 12,
    height: 31,
    width: 112,
    marginTop: 60,
    marginLeft: 15,
    "&:hover": {
      backgroundColor: "#EA4165",
      color: "#FFF",
    },
    "@media (min-width:320px)": {
      fontSize: 12,
      height: 35,
      width: 125,
      marginTop: 20,
    },
    "@media (min-width:700px)": {
      fontSize: 12,
      height: 31,
      width: 112,
      marginTop: 30,
      marginLeft: 15,
    },
    "@media (min-width:1200px)": {
      fontSize: 15,
      height: 42,
      width: 193,
      marginTop: 30,
      marginLeft: 20,
    },
  },
})(Button);

export default function CustomPlanButton({ title, onClick }) {
  const classes = withStyles();

  return (
    <div className={classes.root}>
      <StyledButton variant="outlined" color="secondary" onClick={onClick}>
        {title}
      </StyledButton>
    </div>
  );
}
