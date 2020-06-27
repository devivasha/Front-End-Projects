import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


const textStyle = makeStyles(() => ({
    darkBackgroundForModalWindow: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.69)',
        zIndex: '1100',
    },
    modalWindow: {
        width: '341px',
        height: '120px',
        backgroundColor: '#FFFFFF',
        zIndex: '1101',
        position: 'absolute',
        marginTop:'10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '@media (min-width:320px)': {
            width: '300px',
            height: '155px',

        },
        '@media (min-width:700px)': {
            width: '411px',
            height: '189px',
        },
        '@media (min-width:1200px)': {
            width: '400px',
            height: '200px',
        },
        '@media (min-width:1400px)': {
            width: '400px',
            height: '200px',
        },
        '@media (min-width:1600px)': {
            width: '500px',
            height: '200px',
        }
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: 'space-between',
        width: '160px',
        margin: '20px auto',
        '@media (min-width:320px)': {
            width: '190px',
            margin: '30px auto',
        },
        '@media (min-width:700px)': {
            width: '210px',
            margin: '38px auto',
        },
        '@media (min-width:1200px)': {
            width: '190px',
            margin: '38px auto',
        }
    },
    cross: {
        float: 'right',
        width: '5px',
        height: '5px',
        marginTop: '10px',
        marginRight: '10px',
        cursor: 'pointer',
        '@media (min-width:320px)': {
            width: '10px',
            height: '10px',
            marginTop: '13px',
            marginRight: '13px',
        },
        '@media (min-width:700px)': {
            width: '13px',
            height: '13px',
            marginTop: '18px',
            marginRight: '17px',
        },
        '@media (min-width:1200px)': {
            width: '10px',
            height: '10px',
            marginTop: '18px',
            marginRight: '17px',
        },
    },

    textInModal: {
        display: 'block',
        fontFamily: 'Montserrat, sans-serif',
        fontStyle: "normal",
        fontWeight: '500',
        fontSize: '13px',
        paddingTop: '25px',
        marginLeft: '10px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#000000',
        '@media (min-width:320px)': {
            fontSize: '13px',
            paddingTop: '45px',
            marginLeft: '10px',
        },
        '@media (min-width:700px)': {
            fontSize: '13px',
            paddingTop: '58px',
        },
        '@media (min-width:1200px)': {
            fontSize: '14px',
            paddingTop: '65px',
        },
        '@media (min-width:1600px)': {
            fontSize: '16px',
            paddingTop: '58px',
        }
    },
}));
const StyledButton = withStyles({
    root: {
        position: 'relative',
        borderRadius: 1.4,
        border: "1.4px solid #EA4165",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 400,
        color: "#EA4165",
        fontSize: '10px',
        height: '20px',
        width: '45px',
        padding: 0,
        "&:hover": {
            backgroundColor: "#EA4165",
            color: "#FFF",
        },
        '@media (min-width:320px)': {
            fontSize: '13px',
            height: '28px',
            width: '90px',
            padding: 0
        },
        '@media (min-width:700px)': {
            fontSize: '14px',
            height: '35px',
            width: '99px',
        },
        '@media (min-width:1200px)': {
            fontSize: '14px',
            height: '35px',
            width: '90px',

        }
    },
})(Button);

export default function CustomQuestionWindow({ text, onClick, accept }) {
    const classes = withStyles();
    const textClasses = textStyle();

    return (
        <>
            <Box className={textClasses.darkBackgroundForModalWindow} onClick={onClick}></Box>
            <Box className={textClasses.modalWindow}>
                <img src='/images/Modals/Vector.svg' className={textClasses.cross} alt='close' onClick={onClick} />
                <Typography variant="body1" className={textClasses.textInModal}>{text}</Typography>
                <Box className={textClasses.buttonsContainer}>
                    <div className={classes.root}>
                        <StyledButton variant="outlined" color="secondary" onClick={onClick}>
                            Cancel
                        </StyledButton>
                    </div>
                    <div className={classes.root}>
                        <StyledButton variant="outlined" color="secondary" onClick={accept}>
                            Yes
                        </StyledButton>
                    </div>
                </Box>
            </Box>
        </>
    );
}