import React, { createRef, useEffect, useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRouter } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import "./ChangePassword.css";
import { connect } from "react-redux";
import { perfomForgotPassword } from "../../store/actions";
import Footer from "../../components/Footer/Footer";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import theme from "../../components/Modals/ChangePass/theams";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(5),
    "@media (min-width:350px)": {
      marginBottom: "100px",
    },
  },
  submit: {
    margin: theme.spacing(3, 6, 4),
  },

  customInput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c3c3c3",
      },

      "&.Mui-focused fieldset": {
        color: "#212052",
      },
    },
    width: "100%",
    marginTop: "5px",

    "@media (min-width:350px)": {
      width: "320px",
    },

    "@media (min-width:700px)": {
      marginTop: "30px",
      width: "396px",
    },

    "@media (min-width:1200px)": {
      marginTop: "15px",
      width: "396px",
    },
  },

  errorMessagePassword: {
    color: "#EA4165",
    "@media (min-width:480px)": {
      fontSize: "9px",
      marginTop: "12px",
    },
    "@media (min-width:700px)": {
      fontSize: "14px",
      marginTop: "15px",
    },
    "@media (min-width:1200px)": {
      fontSize: "14px",
      marginTop: "1px",
    },
  },
}));

const CustomButton = withStyles({
  root: {
    width: 238,
    height: 50,
    borderRadius: 1.4,
    border: "1px solid #EA4165",
    marginTop: 30,
    textTransform: "capitalize",

    fontWeight: 600,
    fontSize: 17,
    justifyContent: "center",
    color: "#EA4165",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#EA4165",
      color: "#FFF",
    },
  },
})(Button);

function ChangePassword(props) {
  const classes = useStyles();
  const urlParams = new URLSearchParams(window.location.search);
  const queryCode = urlParams.get("q");
  if (queryCode === "" || !queryCode) {
    window.location.replace("/");
  }
  const [isSent, setIsSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const refRefPas1 = createRef();
  const refRefPas2 = createRef();

  function handleBlurPassword(event) {
    refRefPas1.current.validate(event.target.value);
  }
  function handleBlurPasswordSecond(event) {
    refRefPas2.current.validate(event.target.value);
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

  const checkPass = () => {
    if (newPasswordValue === confirmPasswordValue) {
      props.sendForgotPassword(queryCode, newPasswordValue);
      setIsSent(true);
    }
  }
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== newPasswordValue) {
        return false;
      }
      return true;
    });
  }, [newPasswordValue])

  const thankYouMessage = (
    <React.Fragment>
      <CssBaseline />
      <div className="thankPage">
        <div className="tick"></div>
        <p className="thankText">Password has been changed successfully.</p>
        <CustomButton onClick={() => window.location.replace("/")}>
          Got it
        </CustomButton>
        <Hidden mdDown>
          <div className="image1"></div>
        </Hidden>
        <Hidden mdDown>
          <div className="image2"></div>
        </Hidden>
      </div>
    </React.Fragment>
  );
  const form = (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className={classes.paper}>
          <h1 className="title1">Create a new password</h1>
          <Hidden mdDown>
            <div className="image1"></div>
          </Hidden>
          <Hidden mdDown>
            <div className="image2"></div>
          </Hidden>
          <div className='customTextField'>
            <ValidatorForm className={classes.customInput} autoComplete="off" instantValidate={false} onSubmit={checkPass}>
              <TextValidator
                label="New password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handleChangeNewPassword}
                style={{ width: "100%", marginTop: "15px" }}
                name="repeatPassword"
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
              <div className="submitButton">
                <CustomButton type={"submit"}>Change Password</CustomButton>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        {isSent ? thankYouMessage : form}
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendForgotPassword: (code, password) =>
      dispatch(perfomForgotPassword(code, password)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ChangePassword));
