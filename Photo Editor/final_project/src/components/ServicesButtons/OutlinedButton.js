import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const CustomButton = withStyles({
    root: {
        borderRadius: 1.4,
        textTransform: "capitalize",
        height: 32,
        width: 135,
        cursor: "pointer",
        fontFamily: "Montserrat, sans-serif",
        border: "1.4px solid #8D8D8D",
        fontWeight: 'medium',
        marginTop: 18,
        fontSize: 13,
        color: "8D8D8D",

        "&:hover": {
            backgroundColor: "#E5E5E5",
        },
    },
})(Button);

const OutlinedButton = ({
    title = "cancel",
    type = "button",
    icon = "/images/vts/cancel.svg",
}) => {
    const classes = withStyles();
    return (
        <div className={classes.root}>
            <CustomButton type={type}>
                <img src={icon} alt='next' />
                <span>&nbsp;&nbsp;&nbsp;</span> {title}
            </CustomButton>
        </div>
    );
};
export default OutlinedButton;
