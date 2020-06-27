import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
const MyTypography = withStyles({
    root: {
        fontSize: 11,
        lineHeight: -1,
        verticalAlign: "center",
    },
})(Typography);

export default function MobileEditTypeSwitch({ onBClick, expanded, src, text }) {
    let img = src !== undefined && (<>
        <div style={{
            height: 32,
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            align: "center",
        }}>
            <img src={src} alt="crop ico" style={{
                margin: 'auto'
            }} />{" "}

        </div>
        <span style={{
            width: '100%',
            display: 'block',
            height: 10
        }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </>)

    let adderToText = {}
    if (src === undefined) adderToText = {
        fontSize: 35,
        width: '100%',
        marginTop: -29,
        height: '100%'
    }
    const classes = withStyles();
    return (
        <div style={{
            display: 'flex',
            width: 63,
            height: 65,
            align: "center",
            backgroundColor: "#3D3A3A",
            boxShadow: "none",
            fontSize: 8,
            color: "white",
            borderBottom: "1px solid rgba(0, 0, 0, .125)",
            borderRight: "1px solid rgba(225,225,225, 0.15)",
            textTransform: "uppercase",
            alignItems: "center",
            justifyContent: "center",
            padding: '0px auto',
            paddingTop: '15px',
            cursor: 'pointer',
            "&:not(:last-child)": {
                borderBottom: 0,
            },
            "&:before": {
                display: "none",
            },
        }} onClick={() => onBClick(!expanded)}>
            <div className='position-mob'>
                {img}
                <MyTypography className={classes.root} style={{
                    ...{ height: 32 },
                    ...adderToText
                }}>
                    {text}
                </MyTypography>
            </div>
        </div>
    );
}