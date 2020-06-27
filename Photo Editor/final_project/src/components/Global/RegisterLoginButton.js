import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
    root: {

        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)',
        borderRadius: 1.4,
        border: "1.4px solid #EA4165",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 600,
        color: "#EA4165",
        boxShadow: "0 4px 26px rgba(198, 170, 176, 0.19)",
        fontSize: 12,
        height: 31,
        width: 112,
        marginTop: 60,
        "&:hover": {
            backgroundColor: "#EA4165",
            color: "#FFF",
        },
        "@media (min-width:320px)": {
            fontSize: 14,
            height: 44,
            width: 180,
            marginTop: 35,
        },
        "@media (min-width:700px)": {
            fontSize: 16,
            height: 50,
            width: 200,
            marginTop: 30,
        },
        "@media (min-width:1200px)": {
            fontSize: 17,
            height: 50,
            width: 200,
            marginTop: 30,


        },
    },
})(Button);

export default function RegisterLoginButton({ title, onClick }) {
    const classes = withStyles();

    return (
        <div className={classes.root}>
            <StyledButton variant="outlined" color="secondary" onClick={onClick}>
                {title}
            </StyledButton>
        </div>
    );
}
