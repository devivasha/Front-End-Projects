import React, {createRef, useState} from "react";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CustomButton from "../../components/Global/CustomButton";
import Footer from "../../components/Footer/Footer";
import { sendForgotPassword } from "../../store/actions";
import "./EnterEmail.css";
import { connect } from "react-redux";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import theme from '../../components/Modals/ChangeEmail/theams';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    "@media (min-width:350px)": {
      marginBottom: "100px",
    },
  },
  submit: {
    margin: theme.spacing(3, 6, 4),
  },

  customInput: {
    "& label.Mui-focused": {
      color: "#212052",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c3c3c3",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#212052",
        color: "#212052",
      },
    },
    width: "100%",
    marginTop: "10px",

    "@media (min-width:350px)": {
      width: "320px",
    },

    "@media (min-width:700px)": {
      marginTop: "30px",
      width: "396px",
    },

    "@media (min-width:1200px)": {
      marginTop: "35px",
      width: "396px",
    },
  },
  registerForm: {
    width: "250px",
    margin: "14px auto",
    "@media (min-width:480px)": {
      width: "300px",
    },
    "@media (min-width:700px)": {
      width: "420px",
    },
    "@media (min-width:1200px)": {
      width: "488px",
    },
  },
}));

function EnterEmail(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    props.sendForgotPassword(email);
    setIsSent(true);
  };

  const refRef = createRef();
  function handleBlur(event){
    refRef.current.validate(event.target.value);
  }
  function handleChange(event) {
    setEmail(event.target.value);
  }
  const checkEmailMessage = (
    <React.Fragment>
      <CssBaseline />
      <div className="thankPage">
        <div className="tick"></div>
        <p className="thankText">
          Please check your Email. We sent a link to create the new password.
        </p>
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
        <h1 className="title1">Enter your email</h1>
        <p className="subtitle">
          We will send you a link for password recovery
        </p>
        <Hidden mdDown>
          <div className="image1"></div>
        </Hidden>
        <Hidden mdDown>
          <div className="image2"></div>
        </Hidden>
        <ValidatorForm className={classes.registerForm} autoComplete="off" instantValidate={false} onSubmit={submit}>
          <div className="customTextField">
            <TextValidator
                label="Email"
                variant="outlined"
                onChange={handleChange}
                name="email"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                style={{ width: "100%", marginTop: "15px" }}
                onBlur={handleBlur}
                ref={refRef}
                helperText="Enter your email"
            />
          </div>
          <div className="submitButton">
            <CustomButton title={"Send"} type={"submit"}/>
          </div>
        </ValidatorForm>
      </div>
      </ThemeProvider>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        {isSent ? checkEmailMessage : form}
      </Container>
      <Footer />
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendForgotPassword: (email) => dispatch(sendForgotPassword(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterEmail);
