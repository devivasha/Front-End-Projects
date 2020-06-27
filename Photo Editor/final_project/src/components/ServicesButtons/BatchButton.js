import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    borderRadius: 1.4,
    border: "1px solid #8D8D8D",
    textTransform: "none",
    height: 32,
    width: 135,
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: "#EEEEEE",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 13,
    color: '#3D3A3A',
    marginTop: 30,
    "&:hover": {
      backgroundColor: "#E6E6E6",
    },

  },
})(Button);

export default function CustomButtonService({ title, type = "button", icon, onClick }) {
  const classes = withStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <StyledButton variant="outlined" type={type}>
        <img src={icon} alt='icon' />
        <span>&nbsp;&nbsp;&nbsp;</span>
        {title}
      </StyledButton>
    </div>
  );
}

