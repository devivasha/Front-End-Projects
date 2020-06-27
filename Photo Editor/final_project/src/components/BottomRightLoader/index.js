import { Zoom } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },

}));


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
            contrastText: '#fff',
        }
    },
});

function Loader({ inContentLoading }) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Zoom in={inContentLoading}>
                <Fab color="primary" className={classes.absolute}>
                    <div id="preloader" className="main-wrap main-wrap--white">
                        <div className="preloader"> </div>
                    </div>
                </Fab>
            </Zoom>
        </ThemeProvider>
    );
}

const mapStateToProps = (state) => {
    return {
        inContentLoading: state.temp.inContentLoading
    }
}

export default connect(mapStateToProps, null)(Loader)