import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, NavLink, useHistory, withRouter } from "react-router-dom";
import { getStarted } from "../../store/actions";
import { REPLACE_USER_NEEDED, SHOW_PLANS_MODAL } from "../../store/constants/types";
import Header from "../Header/Header";
import LogIn from "../Modals/LogIn/LogIn";
import CustomInfoWindow from "../Modals/ModalInfo";
import Plans from "../Modals/Plans/Plans";
import Register from "../Modals/Register/Register";
import CustomizedMenus from "../ProfileMenu/ProfMenu";
import styles from "./NavbarsStyle";

const useStyles = makeStyles(styles);

function SectionNavbars({ user, planShow, setPlansIsOpen, replaceUser, replaceUserCompleted, projectId, getStarted }) {
  const history = useHistory()
  if (replaceUser) {
    history.push(replaceUser);
    replaceUserCompleted()
  }
  const classes = useStyles();
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const [logInIsOpen, setLogInIsOpen] = useState(false);
  const [registrationIsSuccessful, setRegistrationIsSuccessful] = useState(
    undefined
  );
  const [userIsAuth, setUserIsAuth] = useState(false);
  const [modalFpasswordSent, setModalFpasswordSent] = useState(false);

  function setUserIsAuthLs() {
    if (!user.plan || user.plan === "temp") {
      setUserIsAuth(false);
    } else {
      setUserIsAuth(true);
    }
  }

  function setUserIsLogOut() {
    localStorage.clear();
    window.location.replace("/");
  }
  useEffect(() => {
    setUserIsAuthLs();
  });

  function regIsSuccess() {
    setRegistrationIsSuccessful(true);
  }

  function setRegisterIsClosed() {
    setRegisterIsOpen(false);
  }

  function setLogInIsClosed() {
    setLogInIsOpen(false);
  }
  function setPlansIsClosed() {
    setPlansIsOpen(false);
  }
  function openRegister() {
    setPlansIsOpen(false);
    setRegisterIsOpen(true);
  }
  function openRegisterFromLogin() {
    setLogInIsOpen(false);
    setRegisterIsOpen(true);
  }
  function openLoginFromRegister() {
    setRegisterIsOpen(false);
    setLogInIsOpen(true);
  }

  const reg = registerIsOpen === true && (
    <Register
      close={setRegisterIsClosed}
      openLoginFromRegister={openLoginFromRegister}
      regIsSuccess={regIsSuccess}
    />
  );
  const log = logInIsOpen === true && (
    <LogIn
      close={setLogInIsClosed}
      openRegisterFromLogin={openRegisterFromLogin}
      showFpasswordModal={() => {
        setModalFpasswordSent(true);

      }}
      setUserIsAuth={setUserIsAuthLs}
    />
  );
  const plans = planShow === true && (
    <Plans close={setPlansIsClosed} openRegister={openRegister} />
  );
  const infoWindow = registrationIsSuccessful === true && (
    <CustomInfoWindow
      text={"Please confirm registration on your email"}
      onClick={() => setRegistrationIsSuccessful(false)}
    />
  );
  const modalEmailForgotPasswordPopup = modalFpasswordSent === true && (
    <CustomInfoWindow
      text={"Password reset instructions sent to your inbox"}
      onClick={() => {
        setModalFpasswordSent(false);
      }}
    />
  );

  const basicUser = userIsAuth === false && (
    <>
      <ListItem className={classes.listItem}>
        <Link
          className={classes.buttonStyle}
          onClick={() => setRegisterIsOpen(true)}
          to="#"
        >
          Register
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          className={classes.buttonStyle}
          onClick={() => setLogInIsOpen(true)}
          to="#"
        >
          Sign in
        </Link>
      </ListItem>
    </>
  );

  const othersUser = userIsAuth === true && (
    <>
      {" "}
      <Hidden smDown>
        {" "}
        <ListItem className={classes.listItem}>
          <Link className={classes.buttonStyle} to="#">
            <CustomizedMenus
              onClick={() => {
                setUserIsLogOut(false);
                setUserIsAuthLs(false);
              }}
            />
          </Link>
        </ListItem>
      </Hidden>
      <Hidden mdUp>
        <ListItem className={classes.listItem}>
          <Link className={classes.buttonStyle} to="/profile" >
            My profile
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.buttonStyle} to="/projects" >
            My projects
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className={classes.buttonStyle} to="/" onClick={() => setUserIsLogOut()} >
            Sign out
          </Link>
        </ListItem>
      </Hidden>
    </>
  );

  let editImages;
  if (user.plan) {
    editImages = (
      <NavLink
        className={classes.linkStyleEdit}
        exact
        activeClassName={classes.ActiveEdit}
        to="/edit-images"
      >
        Edit images
      </NavLink>
    )
  } else {
    editImages = (
      <Link
        className={classes.linkStyleEdit}
        activeClassName={classes.ActiveEdit}
        onClick={() => getStarted()}
        to='#'
      >
        Edit images
      </Link>
    )
  }
  return (
    <div className={classes.section}>
      {plans}
      {log}
      {reg}
      {infoWindow}
      {modalEmailForgotPasswordPopup}
      <div id="navbar" className={classes.navbar}>
        <div className={classes.navigation}>
          <Header
            brand=""
            color="transparent"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <NavLink
                    className={classes.linkStyle}
                    exact
                    activeClassName={classes.Active}
                    to="/"
                  >
                    Home
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  {editImages}
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link
                    className={classes.buttonStyle}
                    onClick={() => setPlansIsOpen(true)}
                    to="#"
                  >
                    Cropman Plus
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    className={classes.linkStyle}
                    exact
                    activeClassName={classes.Active}
                    to="/feedback"
                  >
                    Feedback
                  </NavLink>
                </ListItem>
                {basicUser}
                {othersUser}
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    planShow: state.temp.planShow,
    replaceUser: state.temp.replaceUser,
    projectId: state.projects.qurrentProjectId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPlansIsOpen: (now) =>
      dispatch({
        type: SHOW_PLANS_MODAL,
        payload: now,
      }),
    replaceUserCompleted: () => dispatch({
      type: REPLACE_USER_NEEDED,
      payload: false
    }),
    getStarted: () => dispatch(getStarted())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SectionNavbars));