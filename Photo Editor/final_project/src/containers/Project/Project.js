import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from "react";
import CustomButtonGrey from '../../components/Global/CustomButtonGrey';
import ProjectImgs from "../../components/Projects/ProjectImgs/ProjectImgs";

const EditContainerPro = withStyles({
    root: {
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: 'white',
    }
})(Container);


export default function Project() {
    const classes = withStyles();
    const batchHeader = <>
        <Grid component='div' container item justify="center" xs={4} md={3} lg={4}>
            <ArrowBackIcon className='arrows' />
            <ArrowForwardIcon className='arrows' />
        </Grid>
        <Grid component='div' container item justify="flex-start" xs={4} md={3} lg={3}>
            <CustomButtonGrey title={'Download'} />
        </Grid>
        <Grid component='div' container item justify="flex-start" xs={4} md={3} lg={3}>
            <CustomButtonGrey title={'Add images'} />
        </Grid>
    </>


    return (
        <EditContainerPro className={classes.root} maxWidth={'xl'}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                component='div'>
                <Grid className='batch-header' component='div' container item justify="flex-start" style={{ height: 80 }}>
                    <div className='batch-add-menu'>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            component='div'>
                            <Grid component='div' container item justify="flex-start" xs={false} md={1} lg={2}>
                                <img className='img-logo' src='/images/cropmanIcon.svg' alt="cropman logo" />
                            </Grid>
                            {batchHeader}
                        </Grid>
                    </div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    component='div'>
                    <Grid className='drop-zone' component='div' container item justify="center" >
                        <ProjectImgs />
                    </Grid>
                </Grid>
            </Grid>
        </EditContainerPro>
    );
}
