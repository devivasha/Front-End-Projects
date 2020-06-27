import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {CHANGE_SNACK} from '../../../../src/store/constants/types'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin:'-330px auto',
        '& > * + *': {
            marginTop: theme.spacing(2),
            boxShadow:'0 0 0px rgba(0,0,0,0.5)',
        },

    },
    subroot: {
        width:'auto',
        color:'white',
        backgroundColor: '#5E61A8',
        boxShadow:'0 0 0px rgba(0,0,0,0.5)',
    },
}));


function CustomizedSnackbars({closeSnack, snack }) {
    const classes = useStyles();
    let snackOpened = false, useSnack;
    if (snack){
        snackOpened = true;
        useSnack = snack;
    } else {
        useSnack = {autoHideDuration:6000, severity: 'info', text: " "}
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnack();
    };

    return (
        <div>
            <Snackbar className={classes.root} open={ snackOpened } autoHideDuration={useSnack.autoHideDuration} onClose={handleClose}>
                <Alert className={classes.subroot} severity={useSnack.severity} onClose={handleClose}>
                    {useSnack.text}
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
       snack: state.temp.openSnakBar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       closeSnack:()=> dispatch({ type:CHANGE_SNACK, payload:false })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSnackbars);