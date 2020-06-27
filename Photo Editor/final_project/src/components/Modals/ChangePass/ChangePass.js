import React, { createRef, useEffect, useState } from "react";
import CustomButton from "../../../components/Global/CustomButton";
import RegisterLoginButton from '../../../components/Global/RegisterLoginButton';
import useStyles from "./PasswordStyle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeUserPassword } from "../../../store/actions";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import theme from "./theams";
import './ChangePass.scss';
import { ThemeProvider } from "@material-ui/styles";

function ChangePass(props) {
  const classes = useStyles();

  if (props.passwordChanged === true) {
    props.close();
    props.open();
  }

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function checkPass(event) {
    if (
      newPasswordValue === confirmPasswordValue &&
      passwordValue !== "" &&
      passwordValue !== newPasswordValue
    ) {
      props.changePassword(emailValue, passwordValue, newPasswordValue);
    }
  }

  const refRef = createRef();
  const refRefNew = createRef();
  const refRefPas1 = createRef();
  const refRefPas2 = createRef();

  function handleBlur(event) {
    refRef.current.validate(event.target.value);
  }
  function handleBlurNew(event) {
    refRefNew.current.validate(event.target.value);
  }
  function handleBlurPassword(event) {
    refRefPas1.current.validate(event.target.value);
  }
  function handleBlurPasswordSecond(event) {
    refRefPas2.current.validate(event.target.value);
  }

  function handleChange(event) {
    setEmailValue(event.target.value);
  }
  function handleChangePassword(event) {
    setPasswordValue(event.target.value);
  }
  function handleChangeNewPassword(event) {
    setNewPasswordValue(event.target.value);
  }
  function handleChangeConfirmPassword(event) {
    setConfirmPasswordValue(event.target.value);
  }
  function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordTheSame', (value) => {
      if (value === passwordValue) {
        return false;
      }
      return true;
    });
  }, [passwordValue])
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== newPasswordValue) {
        return false;
      }
      return true;
    });
  }, [newPasswordValue])
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className={classes.darkBackgroundForModalWindow}
          onClick={props.close}
        ></Box>
        <Box className={classes.modalWindowRegister}>
          <Box className={classes.headerInTheModalWindow}>
            <Typography component={"h6"} className={classes.headerRegister}>
              Change password
          </Typography>
            <img
              className={classes.crossClose}
              onClick={props.close}
              alt="cross"
              src="/images/Modals/Vector.svg"
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
          <div className='customTextField'>
            <ValidatorForm className={classes.registerForm} autoComplete="off" instantValidate={false}>
              <TextValidator
                label="Email"
                variant="outlined"
                onChange={handleChange}
                name="email"
                value={emailValue}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                style={{ width: "100%", marginTop: "15px" }}
                onBlur={handleBlur}
                ref={refRef}
              />
              <TextValidator
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangePassword}
                style={{ width: "100%", marginTop: "15px" }}
                name="password"
                validators={['required']}
                errorMessages={['This field is required']}
                value={passwordValue}
                onBlur={handleBlurNew}
                ref={refRefNew}
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
                label="New password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangeNewPassword}
                style={{ width: "100%", marginTop: "15px" }}
                name="repeatPassword"
                validators={['isPasswordTheSame', 'required']}
                errorMessages={['Password can not to be the same', 'This field is required']}
                value={newPasswordValue}
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
              <TextValidator
                label="Confirm password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangeConfirmPassword}
                style={{ width: "100%", marginTop: "15px" }}
                name="repeatPassword"
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'This field is required']}
                value={confirmPasswordValue}
                onBlur={handleBlurPasswordSecond}
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
              <Box onClick={checkPass} >
                {" "}
                <RegisterLoginButton title={"Confirm"}></RegisterLoginButton>
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
    passwordChanged: state.temp.passwordSuccessfullyChanged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (email, password, newPassword) =>
      dispatch(changeUserPassword(email, password, newPassword)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChangePass));
