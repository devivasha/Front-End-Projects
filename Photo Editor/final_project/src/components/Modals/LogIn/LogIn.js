import React, { createRef, useState } from "react";
import RegisterLoginButton from '../../../components/Global/RegisterLoginButton';
import useStyles from "./LoginStyle";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from '@material-ui/styles'
import Box from "@material-ui/core/Box";
import { authUser, sendVerify, signInWithSocial } from "../../../store/actions/";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import theme from './theams';
import './Login.scss';
import firebase from "firebase";


function LogIn(props, { user }) {
  if (props.isEntered === true) {
    props.close();
  }
  const classes = useStyles();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const provider = new firebase.auth.GoogleAuthProvider();

  const history = useHistory();
  const routeChange = () => {
    let path = "/enter-email";
    history.push(path);
  };
  function signInWithGoogle() {
    props.socialSignIn('google');
    props.close();
  }
  function signInWithFacebook() {
    props.socialSignIn('facebook');
    props.close();
  }
  function check(event) {
    if (passwordValue !== "") {
    }
    props.getUser(emailValue, passwordValue);
  }

  const refRef = createRef();
  const refRefPas1 = createRef();
  function handleBlur(event) {
    refRef.current.validate(event.target.value);
  }
  function handleBlurPassword(event) {
    refRefPas1.current.validate(event.target.value);
  }

  function handleChange(event) {
    setEmailValue(event.target.value);
  }
  function handleChangePassword(event) {
    setPasswordValue(event.target.value);
  }
  function handleMouseDownPassword(event) {
    event.preventDefault();
  };
  const errorMessageWrongPassword = passwordCorrect === false && (
    <Typography variant="body1" className={classes.errorMessagePassword}>
      Please enter your password
    </Typography>
  );
  const passwordOrMailAreNotCorrect = () => {
    if (
      props.isEntered ===
      "There is no user record corresponding to this identifier. The user may has been deleted." ||
      props.isEntered ===
      "The password is invalid or the user does not have a password."
    ) {
      return (
        <Typography variant="body1" className={classes.errorMessageEmail}>
          Wrong password or/and email
        </Typography>
      );
    } else {
      return false;
    }
  };
  const notverifiedEmail = props.isEntered ===
    "Email verification required" && (
      <Typography variant="body1">
        {"Your email has not been verified. To resend, click "}
        <a
          href="##"
          onClick={() => {
            props.resendVerify(emailValue);
          }}
        >
          here
      </a>
      </Typography>
    );
  const thisMailAlreayExsist = () => {
    if (props.isEntered === true || props.isEntered === null) {
      return false;
    } else {
      return (
        <Typography
          variant="body2"
          className={classes.errorMessagePasswordReg}
        >
          {props.isEntered}
        </Typography>
      );
    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className={classes.darkBackgroundForModalWindow}
          onClick={props.close}
        > </Box>
        <Box className={classes.modalWindowRegister}>
          <Box className={classes.headerInTheModalWindow}>
            <Typography variant="h6" className={classes.headerRegister}>
              Sign In
          </Typography>
            <Typography variant="body1" className={classes.textInHeaderRegister}>
              Don't have an account?<span>&nbsp;</span>
              <a
                href="##"
                style={{ textDecoration: "none" }}
                onClick={props.openRegisterFromLogin}
              >
                Register here
            </a>
            </Typography>
            <img
              className={classes.crossClose}
              onClick={props.close}
              src="/images/Modals/Vector.svg"
              alt="close"
            />
            <img
              src="/images/stars1.svg"
              alt="stars"
              className={classes.starsNearCross}
            />
            <img
              src="/images/stars2.svg"
              alt="stars"
              className={classes.starsFromLeftSide}
            />
          </Box>
          <Box className={classes.registerWithSocial}>
            <Box className={classes.registerWithFB} onClick={signInWithFacebook}>
              <img
                className={classes.image}
                src="/images/Modals/fb.svg"
                alt="fb-icon"
              />
              <Box className={classes.textInSocialsFB}>With Facebook</Box>
            </Box>
            <Box className={classes.registerWithGoogle} onClick={signInWithGoogle}>
              <img
                className={classes.image}
                src="/images/Modals/icons8-google.svg"
                alt="google-icon"
              />
              <Box className={classes.textInSocialsFB}>With Google</Box>
            </Box>
          </Box>
          <Typography variant="body1" className={classes.orInRegister}>
            or
        </Typography>
          <div className='customTextField'>
            <ValidatorForm className={classes.registerForm} noValidate autoComplete="off" instantValidate={false}>
              <TextValidator
                className={classes.customInput}
                name="email"
                value={emailValue}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                label="Email"
                onBlur={handleBlur}
                ref={refRef}
                variant="outlined"
                onChange={handleChange}
                style={{ width: "100%" }}
              />
              <TextValidator
                className={classes.customInput}
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
                name="password"
                validators={['required']}
                errorMessages={['This field is required']}
                value={passwordValue}
                style={{ width: "100%", marginTop: "15px" }}
                onBlur={handleBlurPassword}
                ref={refRefPas1}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {errorMessageWrongPassword}
              {passwordOrMailAreNotCorrect()}
              {notverifiedEmail}
              {thisMailAlreayExsist()}
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Typography variant="body1" className={classes.forgotPasswordText}>
                Forgot password?<span>&nbsp;</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a
                  style={{ textDecoration: "none" }}
                  href="#"
                  onClick={() => {
                    routeChange();
                    props.close();
                  }}
                >
                  Click here
            </a>
              </Typography>
              <Box onClick={check} className={classes.button}>
                {" "}
                <RegisterLoginButton title={"Sign In"}></RegisterLoginButton>
              </Box>
            </ValidatorForm>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    isEntered: state.temp.isCompletlyEntered,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (email, password) => dispatch(authUser(email, password)),
    resendVerify: (email) => dispatch(sendVerify(email)),
    socialSignIn: (type) => dispatch(signInWithSocial(type))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
