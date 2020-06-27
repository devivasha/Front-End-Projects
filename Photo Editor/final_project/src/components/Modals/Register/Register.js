import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ThemeProvider } from '@material-ui/styles';
import React, { createRef, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { connect } from "react-redux";
import RegisterLoginButton from '../../../components/Global/RegisterLoginButton';
import { registerUser } from "../../../store/actions";
import { signInWithSocial } from './../../../store/actions';
import './Register.scss';
import useStylesReg from "./RegisterStyle";
import theme from "./theams";

function Register(props) {
  const classes = useStylesReg();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (props.isEntered === true) {
    props.close();
    props.regIsSuccess();
  }

  function check(event) {
    if (
      passwordValue === confirmPasswordValue &&
      passwordValue !== ""
    ) {
      props.registerUser(emailValue, passwordValue);
    }
  }
  function signInWithGoogle() {
    props.socialSignIn('google');
    props.close();
  }
  function signInWithFacebook() {
    props.socialSignIn('facebook');
    props.close();
  }
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== passwordValue) {
        return false;
      }
      return true;
    });
  }, [passwordValue])

  const refRef = createRef();
  const refRefPas1 = createRef();
  const refRefPas2 = createRef();

  function handleChange(event) {
    setEmailValue(event.target.value);
  }

  function handleBlur(event) {
    refRef.current.validate(event.target.value);
  }
  function handleBlurPassword(event) {
    refRefPas1.current.validate(event.target.value);
  }
  function handleBlurPasswordSecond(event) {
    refRefPas2.current.validate(event.target.value);
  }


  function handleChangePassword(event) {
    setPasswordValue(event.target.value);
  }

  function handleChangeConfirmPassword(event) {
    setConfirmPasswordValue(event.target.value);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
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
            <Typography variant='body11' className={classes.headerRegisterReg}>
              Register
              </Typography>
            <Typography
              variant='body12'
              className={classes.textInHeaderRegisterReg}
            >
              Already have an account?
                <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={props.openLoginFromRegister}
              >
                {" "}
                  Sign in here
                </a>
            </Typography>
            <img
              className={classes.crossClose}
              onClick={props.close}
              src="/images/Modals/Vector.svg"
            />
            <img
              src="/images/stars2.svg"
              alt="stars"
              className={classes.starsNearCross}
            />
            <img
              src="/images/stars1.svg"
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
          <Typography variant="body2" className={classes.orInRegister}>
            or
          </Typography>
          <div className='customTextField'>
            <ValidatorForm
              onSubmit={check}
              className={classes.registerForm}
              autoComplete="off"
              instantValidate={false}>
              <TextValidator
                name="email"
                borderRadius="1px"
                value={emailValue}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'Email is not valid']}
                className={classes.customInput}
                label="Email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ width: "100%", marginTop: "15px" }}
                ref={refRef}
              />
              <TextValidator
                className={classes.customInput}
                borderRadius="1px"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
                onBlur={handleBlurPassword}
                name="password"
                validators={['required']}
                errorMessages={['This field is required']}
                value={passwordValue}
                style={{ width: "100%", marginTop: "15px" }}
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
              <TextValidator
                className={classes.customInput}
                borderRadius="1px"
                label="Confirm password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangeConfirmPassword}
                onBlur={handleBlurPasswordSecond}
                name="repeatPassword"
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'This field is required']}
                value={confirmPasswordValue}
                style={{ width: "100%", marginTop: "15px" }}
                ref={refRefPas2}
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
              <Box onClick={check} className={classes.button}>
                {" "}
                <RegisterLoginButton title={"Register"}></RegisterLoginButton>
              </Box>
            </ValidatorForm>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isEntered: state.temp.isCompletlyEntered,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (email, password) => dispatch(registerUser(email, password)),
    socialSignIn: (type) => dispatch(signInWithSocial(type))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);