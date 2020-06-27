import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ThemeProvider } from "@material-ui/styles";
import React, { createRef, useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { connect } from "react-redux";
import CustomButton from "../../../components/Global/CustomButton";
import { changeUserEmail, createError } from "../../../store/actions";
import { CHANGE_EMAIL } from "../../../store/constants/types";
import './ChangeEmail.scss';
import useStyles from "./EmailStyles";
import theme from './theams';


function ChangeEmail(props) {
    const classes = useStyles();

    const [emailValue, setEmailValue] = useState("");
    const [newEmailValue, setNewEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [passwordCorrect, setPasswordCorrect] = useState(undefined);

    if (props.emailChanged === true) {
        props.close();
        props.open();
    } else if (props.emailChanged === false) {
        props.errCreator('Change email Error', props.emailChanged)
        props.setChangeEmail(null)
    }

    function checkEmail(event) {
        setPasswordCorrect(undefined);

        if (passwordValue === "") {
            setPasswordCorrect(false);
        }
        if (
            passwordValue !== "" &&
            emailValue !== newEmailValue
        ) {
            props.changeEmail(emailValue, passwordValue, newEmailValue);
        }
    }

    const refRef = createRef();
    const refRefNew = createRef();
    const refRefPas = createRef();

    function handleBlur(event) {
        refRef.current.validate(event.target.value);
    }
    function handleBlurNew(event) {
        refRefNew.current.validate(event.target.value);
    }
    function handleBlurPassword(event) {
        refRefPas.current.validate(event.target.value);
    }

    function handleChange(event) {
        setEmailValue(event.target.value);
    }
    function handleNewChange(event) {
        setNewEmailValue(event.target.value);
    }
    function handleChangePassword(event) {
        setPasswordValue(event.target.value);
    }
    function handleMouseDownPassword(event) {
        event.preventDefault();
    };

    const errorMessageWrongPassword = passwordCorrect === false && (
        <Typography variant="body1" className={classes.errorMessagePassword}>
            You have not input your password
        </Typography>
    );
    useEffect(() => {
        ValidatorForm.addValidationRule('newEmailMatch', (value) => {
            if (value === emailValue) {
                return false;
            }
            return true;
        });
    }, [emailValue])
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box
                    className={classes.darkBackgroundForModalWindow}
                    onClick={props.close}
                > </Box>
                <Box className={classes.modalWindowRegister}>
                    <Box className={classes.headerInTheModalWindow}>
                        <Typography component={"h6"} className={classes.headerRegister}>
                            Change email
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
                                label="New email"
                                variant="outlined"
                                onChange={handleNewChange}
                                name="email"
                                value={newEmailValue}
                                validators={['required', 'isEmail', 'newEmailMatch']}
                                errorMessages={['This field is required', 'Email is not valid', 'New email can not be the same']}
                                style={{ width: "100%", marginTop: "15px" }}
                                onBlur={handleBlurNew}
                                ref={refRefNew}
                            />
                            <TextValidator
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
                                ref={refRefPas}
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
                            <Box onClick={checkEmail} className={classes.button}>
                                {" "}
                                <CustomButton title={"Confirm"}> </CustomButton>
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
        emailChanged: state.temp.emailsuccessfullyChanged,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmail: (email, password, newEmail) =>
            dispatch(changeUserEmail(email, password, newEmail)),
        errCreator: (title, message) => dispatch(createError(title, message)),
        setChangeEmail: (t) => dispatch(
            {
                type: CHANGE_EMAIL,
                payload: t
            })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);
