import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const ProfileLink = withStyles({
  root: {
    fontStyle: "normal",
    fontWeight: 600,
    boxShadow: "none",
    padding: 0,
    fontSize: 14,
    marginTop: -25,
    marginLeft: 40,
    textTransform: "none",
    color: "#212052",
    backgroundColor: "transparent",
    "&::after": {
      content: 'url("/images/dropdown.svg")',
      marginLeft: 7,
    },
    "&:hover": {
      color: "#212052",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:focus": {
      color: "#212052",
      textDecoration: "none",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      color: "##212052",
      backgroundColor: "transparent",
      boxShadow: "none",
    },

    "&:visited": {
      color: "##212052",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
})(Button);

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    // elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    justifyContent: "left",
    color: "#212052",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#5E63D9",
      backgroundColor: "transparent",
    },
    "&:focus": {
      color: "#5E63D9",
      backgroundColor: "transparent",
    },
    "&:active": {
      color: "#9595A8",
      backgroundColor: "transparent",
    },
    "&:visited": {
      color: "#212052",
      backgroundColor: "transparent",
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ onClick }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = withStyles();

  return (
    <div>
      <ProfileLink
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        My account{" "}
      </ProfileLink>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={anchorEl}
      >
        <StyledMenuItem onClick={handleClose} component={Link} to="/profile">
          <ListItemText disableTypography primary={<Typography type="body2" style={{ fontSize: '14px', color: '#212052', fontWeight: '400' }}>My Profile</Typography>} />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose} component={Link} to="/projects">
          <ListItemText disableTypography primary={<Typography type="body2" style={{ fontSize: '14px', color: '#212052', fontWeight: '400' }}>My Projects</Typography>} />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={handleClose}
          component={Link}
          to="/"
          onClick={onClick}
        >
          <ListItemText disableTypography primary={<Typography type="body2" style={{ fontSize: '14px', color: '#212052', fontWeight: '400' }}>Sign Out</Typography>} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
