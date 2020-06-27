import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../../store/actions';
import CustomButton from '../Global/CustomButton';

const StyledHeader = withStyles({
    root: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 18,
        marginTop: 100,
        fontSize: 36,
        color: '#212052',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '3rem',
        '@media (min-width:600px)': {
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: 175,
            fontSize: 32,
        },
        '@media (min-width:960px)': {
            marginTop: 0,
            fontSize: 37,
            textAlign: 'left',
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 36,
        },
    }
})(Typography);

const StyledParagraph = withStyles({
    root: {
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 18,
        color: '#474747',
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: '2rem',
        '@media (min-width:600px)': {
            paddingLeft: 60,
            paddingRight: 60,
            fontSize: 19,
        },
        '@media (min-width:960px)': {
            fontSize: 19,
            textAlign: 'left',
            paddingLeft: 0,
            paddingRight: 0,
        },
    }
})(Typography);


function Main({ getStarted }) {
    const classes = withStyles();
    return (
        <div style={{ position: 'relative' }}>
            <Grid container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className='myContainer'
                component={'div'}>
                <Grid container item md={1} xs={false} component={'div'} order={1} > </Grid>
                <Grid container item md={4} xs={12} component={'div'} order={2}>
                    <Box>
                        <StyledHeader className={classes.root}> Simple and clear batch photo editing</StyledHeader>
                        <StyledParagraph className={classes.root}>
                            Cropman is online editor for multiple images, it has all neсessary features and saves your time. Easy and intuitive interface will make your work done fast and achieve a great result. <br /><strong>Get started for free!</strong>
                        </StyledParagraph>
                        <CustomButton title={'get started'} onClick={() => getStarted()} />
                    </Box>
                </Grid>
                <Grid container item md={7} xs={12} component={'div'} order={3}>
                    <Box>
                        <img src='/images/Main/main.svg' style={{ width: '100%' }} alt="mainImage" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStarted: () => dispatch(getStarted())
    }
}


export default connect(null, mapDispatchToProps)(Main)


