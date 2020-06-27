import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function LoadingBackdrop({ loading }) {
    const
        classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={loading}>
            <div id="preloader" className="main-wrap main-wrap--white">
                <div className="preloader"></div>
            </div>
        </Backdrop>
    );
}
const mapStateToProps = (state) => {
    return {
        loading: state.temp.loading
    }
}

export default connect(mapStateToProps, null)(LoadingBackdrop)