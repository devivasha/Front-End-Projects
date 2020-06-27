import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";
import MyProjects from "../MyProjects/MyProjects";
import "./Projects.scss";




const EditContainer = withStyles({
    root: {
        height: '100vh',
        padding: 0,
    }
})(Container);

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            underline: {
                "&:before": {
                    content: ''
                },
                "&:after": {
                    content: ''
                }
            }
        }
    }
});

export default function Projects() {
    const classes = withStyles();
    return (
        <div className='overflow-hidden'>
        <EditContainer className={classes.root} maxWidth={'xl'}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                component='div'>
                <Grid className='batch-header' component='div' container item justify="flex-start">
                    <div className='batch-add-menu'>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            component='div'>
                            <Grid component='div' container item justify="flex-start" xs={false} md={1} lg={2}>
                                <NavLink to="/"> <img className='img-logo' src='/images/cropmanIcon.svg' alt="cropman logo" /> </NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid
                    className='projects-style'
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    component='div'
                  >
                        <Grid className='drop-zone' component='div' container item justify="flex-start" xs={12}>
                            <MuiThemeProvider theme={theme}>
                                <MyProjects />
                            </MuiThemeProvider>
                        </Grid>
                </Grid>
            </Grid>
        </EditContainer>
        </div>
    );
}