import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import React, { createRef, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/Global/CustomButton";
import { sendFeedback } from "../../store/actions";
import "./Feedback.css";
import themes from "./theams";

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
    margin: theme.spacing(3, 6, 2),
  },
  customInput: {
    "& label.Mui-focused": {
      color: "#8b8b8b",
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
    marginTop: "5px",

    "@media (min-width:350px)": {
      width: "320px",
    },

    "@media (min-width:700px)": {
      marginTop: "30px",
      width: "396px",
    },

    "@media (min-width:1200px)": {
      marginTop: "25px",
      width: "396px",
    },
  },
}));

function Feedback(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const refRef = createRef();
  const refRef2 = createRef();
  function handleBlur(event) {
    if (refRef.current) {
      refRef.current.validate(event.target.value);
    }
  }
  function handleBlurText(event) {
    refRef2.current.validate(event.target.value);
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }
  function handleChangeText(event) {
    setMessage(event.target.value);
  }
  useEffect(() => {
    ValidatorForm.addValidationRule('isText', (value) => {
      if (value === '' || (value.length <= 10)) {
        return false;
      }
      return true;
    });
  })

  const submit = (event) => {
    setIsSent(false);
    if (email !== "" && message !== "") {
      props.sendFeedback(email, message);
      setIsSent(true)
    }
  };

  const thankYouMessage = (
    <React.Fragment>
      <CssBaseline />
      <div className="thankPage">
        <div className="tick"></div>
        <p className="thankText">
          Thank you. Feedback has been sent successfully.
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
      <div className={classes.paper}>
        <h1 className="title1">Submit a feedback</h1>
        <p className="subtitle">Send us your comments or proposals</p>
        <Hidden mdDown>
          <div className="image1"></div>
        </Hidden>
        <Hidden mdDown>
          <div className="image2"></div>
        </Hidden>
        <div className="customTextField">
          <ValidatorForm className={classes.registerForm} autoComplete="off" instantValidate={false}>
            <ThemeProvider theme={themes}>
              <TextValidator
                className={classes.customInput}
                borderRadius="1px"
                label="Your email"
                variant="outlined"
                onBlur={handleBlur}
                ref={refRef}
                onChange={handleChange}
                name="email"
                id="email"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                style={{ width: "100%", marginTop: "15px" }}
                autoFocus
                autoComplete
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
              />
              <TextValidator
                className={classes.customInput}
                borderRadius="1px"
                label="Your text"
                variant="outlined"
                onBlur={handleBlurText}
                ref={refRef2}
                onChange={handleChangeText}
                name="comment"
                id="outlined-multiline-static"
                value={message}
                validators={['required', 'isText']}
                errorMessages={['This field is required', 'Please enter feedback (10 characters minimum)']}
                style={{ width: "100%", marginTop: "15px" }}
                margin="normal"
                fullWidth
                multiline
                required
                rows={4}
                type="text"
                autoComplete="off"

              />
            </ThemeProvider>
          </ValidatorForm>
        </div>
        <div className="submitButton">
          <CustomButton title={"Submit"} type={"submit"} onClick={submit} />
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <>
      <Container component="main" maxWidth="xs">
        {isSent ? thankYouMessage : form}
      </Container>
      <Footer />
    </>
  );
}

function mapStateToProps(state) {
  return {
    feedbackSent: state.temp.feedbackSent,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendFeedback: (email, message) =>
      dispatch(sendFeedback(email, message)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feedback))
