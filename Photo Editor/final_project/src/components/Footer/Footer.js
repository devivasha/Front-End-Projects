import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getStarted } from "../../store/actions";
import styles from "./FooterStyle";

const useStyles = makeStyles(styles);

function Footer({ getStarted, user }) {
  const classes = useStyles();
  const nav = classes.item + " " + classes.navItem;
  const logo = classes.item + " " + classes.logoItem;

  let editImages;
  if (user.plan) {
    editImages = (
      <NavLink
        className={classes.linkStyle}
        exact
        activeClassName={classes.Active}
        to="/edit-images"
      >
        Edit images
      </NavLink>
    )
  } else {
    editImages = (
      <Link
        className={classes.linkStyle}
        onClick={() => getStarted()}
      >
        Edit images
      </Link>
    )
  }


  return (
    <div className={classes.myfooter}>
      <div className={classes.mywrapper}>
        <div className={classes.logoAndMenuWrapper}>
          <div className={logo}>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className={classes.item}>
            <div className={classes.container2}>
              <div className={nav}>
                {editImages}
              </div>
              <div className={nav}>
                <NavLink
                  className={classes.linkStyle}
                  exact
                  activeClassName={classes.Active}
                  to="/feedback"
                >
                  Send feedback
                </NavLink>
              </div>
              <div className={nav}>
                <NavLink
                  className={classes.linkStyle}
                  exact
                  activeClassName={classes.Active}
                  to="/privacy-policy"
                >
                  Privacy Policy
                </NavLink>
              </div>
              <div className={nav}>
                <NavLink
                  className={classes.linkStyle}
                  exact
                  activeClassName={classes.Active}
                  to="/terms-conditions"
                >
                  Terms &amp; Conditions
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.copyright}>
          © Cropman 2020. All rights reserved
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getStarted: () => dispatch(getStarted())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)