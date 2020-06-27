import { Grid } from "@material-ui/core";
import { default as Box, default as Button } from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledButton = withStyles({
    root: {
        borderRadius: '2px',
        border: "1px dashed #BABABA",
        height: '245px',
        width: '270px',
        fontFamily: "Montserrat, sans-serif",
        textTransform: "none",
        fontStyle: "normal",
        fontWeight: 600,
        marginTop: '13px',
        marginLeft: '13px',
        marginRight: '13px',
        fontSize: 14,
        color: "#CDCDCD",
        textDecoration: 'none',
        cursor: 'pointer',
        backgroundColor: '#F7F7F7',
        "&:hover": {
            backgroundColor: "#E9E9E9",
            color: '#A6A6A6'
        },
    },
})(Button);
const Plus = withStyles({
    root: {
        height: '266px',
        width: '275px',
        fontSize: '60px',
        color: " #D8D8D8",
        padding: 0,
        marginTop: '-17px',
        "&:hover": {
            backgroundColor: "transparent",
            color: "#A6A6A6",
        },
    },
})(Box);


export default function AddProject({ onClick }) {
    const classes = withStyles();
    return (
        <div className={classes.root} onClick={onClick}>
            <StyledButton type='button'>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid component={'div'} container item justify="center" >
                        <Plus>+</Plus>
                    </Grid>
                    <Grid component={'div'} container item justify="center">
                        <div style={{ position: 'absolute', top: 139, left: 53 }}> Create a new project</div>
                    </Grid>

                </Grid>
            </StyledButton>
        </div>
    );
}
