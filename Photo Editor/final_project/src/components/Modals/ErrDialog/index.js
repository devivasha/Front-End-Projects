import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Error } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { SET_ERROR } from '../../../store/constants/types';


let lastTitle = '';
let lastMessage = '';
function ResponsiveDialog({ error, closError }) {
    let nowOpen = false
    if (error !== false) {
        nowOpen = true
        lastMessage = error.message;
        if (!error.title) {
            lastTitle = ' An error has occurred';
        } else {
            lastTitle = ' ' + error.title;
        }

    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={nowOpen}
                onClose={() => closError()}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title"><Error style={{ fontSize: 'large', marginBottom: '-3px' }} />{lastTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {lastMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closError()} color="secondary">Got it</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        error: state.temp.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closError: () => dispatch({
            type: SET_ERROR,
            payload: false
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDialog)