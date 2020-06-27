import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Profile.scss";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import ChangePass from "../../components/Modals/ChangePass/ChangePass";
import ChangeEmail from "../../components/Modals/ChangeEmail/ChangeEmail";
import Plans from "../../components/Modals/Plans/Plans";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomQuestionWindow from "../../components/Modals/ModalQuestion";
import CustomInfoWindow from "../../components/Modals/ModalInfo";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import VerifyEmailPopup from '../../components/Modals/VerifyEmail';
import { sendVerify, deleteUserAccount, unsubscribeUserAccount, billingUserAccount } from "../../store/actions";
import { connect } from "react-redux";
import { SHOW_PLANS_MODAL } from "../../store/constants/types";

const ProfileHeader = withStyles({
  root: {
    fontSize: 23,
    color: "#212052",
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "bold",
    "@media (min-width:600px)": {
      fontSize: 25,
    },
  },
})(Typography);
const StyledProfileText = withStyles({
  root: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 14,
    color: "#474747",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: "2rem",
    "@media (min-width:600px)": {
      fontSize: 14,
    },
  },
})(Typography);

const BlueText = withStyles({
  root: {
    fontSize: 14,
    marginTop: -26,
    marginBottom: 30,
    color: "#5E63D9",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: "2rem",
    "@media (min-width:600px)": {
      marginTop: 30,
      fontSize: 14,
    },
    "&:hover": {
      cursor: "pointer",
      opacity: 0.5,
      textDecoration: "none",
    },
    "&:active": {
      background: "transparent",
      transition: "none",
    },
  },
})(Link);

const SmallButton = withStyles({
  root: {
    borderRadius: 1.4,
    border: "1px solid #EA4165",
    marginTop: -17,
    marginBottom: 30,
    paddingLeft: 25,
    paddingRight: 25,
    textTransform: "capitalize",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 13,
    justifyContent: "left",
    color: "#EA4165",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#EA4165",
      color: "#FFF",
    },
    "@media (min-width:600px)": {
      marginTop: 30,
    },
  },
})(Button);

const SmallButtonNoneBorder = withStyles({
  root: {
    marginTop: 30,
    marginBottom: 30,
    textTransform: "capitalize",
    fontFamily: "Montserrat, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    textAlign: "left",
    color: "#EA4165",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.5,
      textDecoration: "none",
    },
    "&:active": {
      background: "transparent",
      transition: "none",
    },
  },
})(Link);

function Profile(props) {
  const classes = withStyles();

  if (!props.user.plan) {
    props.history.push('/')
  }

  //Users Mode switch
  let palndv;
  if (props.user.plan === 'plus') {
    palndv = true
  } else {
    palndv = false
  }

  const [userIsPlan] = useState(palndv);

  const proUser = userIsPlan === false && (
    <SmallButton
      component={Link}
      to="/cropman-plus"
      className={classes.root}
      onClick={() => props.setPlansIsOpen(true)}
    >
      Upgrade to Cropman Plus{" "}
    </SmallButton>
  );
  const plusUser = userIsPlan === true && (
    <SmallButton
      component={Link} to="/cropman-plus"
      className={classes.root}
      onClick={() => setUnsubscribeIsOpen(true)}>
      Unsubscribe
    </SmallButton>
  );

  // Password Modals & PopUp switch
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [changePassIsOpen, setChangePassIsOpen] = useState(false);

  function setChangePassIsClosed() {
    setChangePassIsOpen(false);
  }
  function setChangedPassIsOpen() {
    setPasswordChanged(true);
  }
  const changePass = changePassIsOpen === true && (
    <ChangePass close={setChangePassIsClosed} open={setChangedPassIsOpen} />
  );
  const passwordChangedPopUp = passwordChanged === true && (
    <CustomInfoWindow text={'Password has been changed successfully. Please log in with the new password.'} onClick={() => { setPasswordChanged(false); props.history.push("/"); }} />
  );

  //Email Modals & PopUp switch
  const [emailChanged, setEmailChanged] = useState(false);
  const [changeEmailIsOpen, setChangeEmailIsOpen] = useState(false);

  function setChangeEmailIsClosed() {
    setChangeEmailIsOpen(false);
  }
  function setChangedEmailIsOpen() {
    setEmailChanged(true);
  }
  const changeEmail = changeEmailIsOpen === true && (
    <ChangeEmail close={setChangeEmailIsClosed} open={setChangedEmailIsOpen} />
  );
  const verificationPopUp = emailChanged === true && <VerifyEmailPopup onClick={() => setEmailChanged(false)} resendConfirmation={() => props.sendVerifyEmail(props.user.email)} />;



  //Delete Modals & PopUp switch
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);

  const deleteOption = deleteIsOpen === true && (
    <CustomQuestionWindow
      text={"Are you sure you want to delete account?"}
      onClick={() => setDeleteIsOpen(false)}
      accept={() => {
        setDeleteIsOpen(false);
        props.deleteAccount();
      }}
    />
  );
  const deleteApproved = props.accountDeleted === true && (
    <CustomInfoWindow
      text={"Your account has been successfully deleted."}
      onClick={() => { window.location.replace('/') }}
    />
  );
  // Unsubscribe Modals & PopUp switch
  const [unsubscribeIsOpen, setUnsubscribeIsOpen] = useState(false);
  const [unsubscribeAccepted, setUnsubscribeAccepted] = useState(false);

  const unsubscribeOption = unsubscribeIsOpen === true && (
    <CustomQuestionWindow
      text={"Are you sure you want to unsubscribe from Plus plan?"}
      onClick={() => setUnsubscribeIsOpen(false)}
      accept={() => {
        setUnsubscribeIsOpen(false);
        props.unsubscribeAccount();
        setUnsubscribeAccepted(true);
      }}
    />
  );
  const unsubscribeApproved = (unsubscribeAccepted === props.accountUnsubscribe) === true && (
    <CustomInfoWindow
      text={"You are unsubscribed."}
      onClick={() => { setUnsubscribeAccepted(false); props.history.push("/") }}
    />
  );

  return (
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className="container">
          <Box
            component={"div"}
            className="stars"
            display={{ xs: "none", md: "block" }}
          >
            <img src="/images/Feedback/image4.png" alt="stars-logo" />
          </Box>
          <Box
            component={"div"}
            className="stars2"
            display={{ xs: "none", md: "block" }}
          >
            <img src="/images/Feedback/image5.png" alt="stars-logo" />
          </Box>
          {changePass}
          {changeEmail}
          {deleteOption}
          {deleteApproved}
          {unsubscribeOption}
          {unsubscribeApproved}
          {passwordChangedPopUp}
          {verificationPopUp}
          <Box component={"div"}>
            <Box component={"div"}>
              <Grid container direction="column" justify="flex-start" alignItems="center"
              >
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  component={"div"}
                  xs={12}
                >
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={2}
                    md={2}
                  >
                    {" "}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={12}
                    sm={10}
                    md={10}
                  >
                    <ProfileHeader className={classes.root}>
                      My profile
                  </ProfileHeader>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  component={"div"}
                  xs={12}
                >
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={2}
                    md={2}
                  >
                    {" "}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={2}
                    md={2}
                  >
                    <StyledProfileText className={classes.root}>
                      Email
                  </StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={4}
                    md={3}
                  >
                    <StyledProfileText className={classes.root}>
                      {props.user.email}
                    </StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={3}
                    md={2}
                  >
                    <BlueText
                      component={"a"}
                      className={classes.root}
                      onClick={() => setChangeEmailIsOpen(true)}
                    >
                      change email
                  </BlueText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={1}
                    md={1}
                  >
                    {" "}
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  component={"div"}
                  xs={12}
                >
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={2}
                    md={2}
                  >
                    {" "}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={2}
                    md={2}
                  >
                    <StyledProfileText className={classes.root}>
                      Password
                  </StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={4}
                    md={3}
                  >
                    <StyledProfileText className={classes.root}>
                      . . . . . . . . . . . .
                  </StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={3}
                    md={2}
                  >
                    <BlueText
                      className={classes.root}
                      component={"a"}
                      onClick={() => setChangePassIsOpen(true)}
                    >
                      change password
                  </BlueText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={1}
                    md={1}
                  >
                    {" "}
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  component={"div"}
                  xs={12}
                >
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={2}
                    md={2}
                  >
                    {" "}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={2}
                    md={2}
                  >
                    <StyledProfileText className={classes.root}>
                      My Plan
                  </StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={6}
                    sm={4}
                    md={3}
                  >
                    <StyledProfileText
                      className={classes.root}
                    >{`Cropman ${props.user.plan}`}</StyledProfileText>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={4}
                    md={3}
                  >
                    {proUser}
                    {plusUser}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={false}
                    md={false}
                  >
                    {" "}
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  component={"div"}
                  xs={12}
                >
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={false}
                    sm={2}
                    md={2}
                  >
                    {" "}
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={9}
                    sm={9}
                    md={4}
                  >
                    <SmallButtonNoneBorder
                      container={"a"}
                      className={classes.root}
                      onClick={() => setDeleteIsOpen(true)}
                    >
                      Delete account
                  </SmallButtonNoneBorder>
                  </Grid>
                  <Grid
                    container
                    item
                    justify="flex-start"
                    component={"div"}
                    xs={3}
                    sm={1}
                    md={6}
                  >
                    {" "}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </Container>
      <Footer />
    </>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
    accountDeleted: state.temp.accountDeleted,
    accountUnsubscribe: state.temp.accountUnsubscribe,
    accountBilling: state.temp.accountBilling,
    planShow: state.temp.planShow
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendVerifyEmail: (email) => { dispatch(sendVerify(email)) },
    deleteAccount: () => { dispatch(deleteUserAccount()) },
    unsubscribeAccount: () => { dispatch(unsubscribeUserAccount()) },
    billingAccount: () => { dispatch(billingUserAccount()) },
    setPlansIsOpen: (now) => dispatch({
      type: SHOW_PLANS_MODAL,
      payload: now
    })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
