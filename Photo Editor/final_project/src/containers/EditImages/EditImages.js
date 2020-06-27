import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButtonGrey from '../../components/Global/CustomButtonGrey';
import CustomInfoWindow from "../../components/Modals/ModalInfo";
import CropPanel from "../../components/ServicesButtons/CropBtn/CropPanel";
import ResizePanel from "../../components/ServicesButtons/ResizeBtn/ResizePanel";
import RotatePanel from "../../components/ServicesButtons/RotateBtn/RotatePanel";
import WatermarkPanel from "../../components/ServicesButtons/WatermarkBtn/WatermarkPanel";
import { sendEditRequest, setCurrentEditorAction, startDownload, uploadFiles } from "../../store/actions";
import CroppmanDropzone from "../EditorImagesArea";
import '../Projects/Projects.scss';
import Arrows from './Arrows';
import "./EditImages.scss";
import MobMenu from './MobMenu';
import RemoveAllImagesBtn from './RemoveAllButton';

const LongButton = withStyles({
    root: {
        borderRadius: 1,
        border: "1px solid #8D8D8D",
        height: 43,
        width: 281,
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 13,
        color: "#3D3A3A",
        textDecoration: 'none',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: " #E5E5E5",
            textDecoration: 'none',
        },
        label: {
            backgroundColor: " #E5E5E5",
            textDecoration: 'none',
            "&:link": {
                backgroundColor: " #E5E5E5",
                textDecoration: 'none',
            },
            "&:visited": {
                backgroundColor: " #E5E5E5",
                textDecoration: 'none',
            },
            "&:active": {
                textDecoration: 'none',
                backgroundColor: " #E5E5E5",
            },
        }
    },
})(Button);


const EditContainer = withStyles({
    root: {
        height: '100vh',
        backgroundColor: '#E1E1E1',
        margin: 0,
        padding: 0,
    }
})(Container);

const BatchText = withStyles({
    root: {
        width: 281,
        height: 'auto',
        fontSize: 12,
        color: '#474747',
        fontWeight: 300,
        textAlign: 'left',
        lineHeight: '1.4rem',
        margin: '7px auto',
        marginBottom: 15,
    }
})(Typography);


function EditImages({ user, uploadFiles, confirmCurrentAction, changeEditCollapsed, collapsed, project, downloadProject, currentProjectId, prevHistory, changeHistoryByArrows }) {
    const classes = withStyles();
    let backArrow = true, forwardArrow = true;
    if (prevHistory.length > project.history.length) forwardArrow = false
    if (project.history.length > 0) backArrow = false
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            uploadFiles(acceptedFiles)

        }
    });
    const [modalIsOpen, setModalIsOpen] = useState(false)
    function setModalOpen() {
        setModalIsOpen(true)
    }
    function setModalClosed() {
        setModalIsOpen(false)
    }
    const arrows = (project.photos.origin.length > 0 && currentProjectId !== null) === true && (
        <div className='arrow-move'>
            <Arrows backArrow={backArrow} forwardArrow={forwardArrow} />
        </div>
    );
    const batchHeader = (project.photos.origin.length > 0) && <>
        <Grid component='div' container item justify="center" xs={4} sm={3} md={3} lg={3} xl={3}>
            {arrows}
        </Grid>
        <Grid onClick={() => downloadProject()} component='div' container item justify="flex-start" xs={4} sm={3} md={4} lg={3} xl={3}>
            <CustomButtonGrey title={'Download'} />
        </Grid>
        <Grid {...getRootProps()} component='div' container item justify="flex-start" xs={4} sm={4} md={4} lg={3} xl={3}>
            <input {...getInputProps()} />
            <CustomButtonGrey title={'Add images'} />
        </Grid>
    </>

    const modalWindow = modalIsOpen === true && <CustomInfoWindow style={{ position: 'absolute' }} text={'This option is not available for not authorized users. Please register or upgrade to Cropman Plus.'} onClick={setModalClosed} />

    const buttonToMyProjectBasic = user.plan === 'temp' && <LongButton className={classes.root} onClick={setModalOpen} style={{ marginTop: 20 }}><CreateNewFolderIcon style={{ marginRight: 11 }} /> My projects </LongButton>

    const buttonToMyProjectRegistered = user.plan !== 'temp' && <NavLink exact to="/projects" style={{ textDecoration: 'none', marginTop: 20 }}><LongButton className={classes.root}><CreateNewFolderIcon style={{ marginRight: 11 }} /> My projects </LongButton></NavLink>


    return (
        <div className='overflow-hidden'>
            <EditContainer className={classes.root} maxWidth={'xl'} >
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    component='div'>
                    <Grid className='batch-header' component='div' container item justify="flex-start" style={{ height: 80 }}>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            component='div'
                        >
                            <Grid component='div' container item justify="flex-start" xs={false} sm={3} md={3} lg={1} xl={1}>
                                <NavLink to="/"><img className='img-logo' src='/images/cropmanIcon.svg' alt="cropman logo" /></NavLink>
                            </Grid>
                            <Hidden smUp>
                                <Grid component='div' container item justify="flex-start" xs={12} sm={false} md={false} lg={false} xl={false}>
                                    <MobMenu />
                                </Grid>
                            </Hidden>
                            <Hidden xsDown>
                                <Grid className='batch-add-menu' component='div' container item justify="flex-start" xs={false} sm={9} md={5} lg={5} xl={4}>
                                    <Grid className='move-header' component='div' container justify="flex-start" sm={10}>
                                        <Grid component='div' container item justify="center" xs={false} sm={false} md={1} lg={2} xl={2} >
                                            <NavLink to="/" style={{
                                                display: 'block',
                                                width: '100%',
                                                height: '100%'
                                            }}>
                                            </NavLink>
                                        </Grid>
                                        {batchHeader}
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        component='div'>

                        <Grid className='drop-zone' component='div' container item justify="start" xs={12} sm={7} md={8} lg={9} xl={10}>
                            <div className='overflow-hidden'>
                                {modalWindow}
                                <CroppmanDropzone />

                            </div>
                        </Grid>
                        <Hidden xsDown>
                            <Grid
                                container item
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                                className='service-zone'
                                component='div'
                                xs={false}
                                sm={5}
                                md={4}
                                lg={3}
                                xl={2}
                            >
                                <Grid className='service' component='div' container item justify="center">
                                    <div>
                                        <CropPanel
                                            expanded={collapsed[0]}
                                            onBClick={(newat) => { changeEditCollapsed([newat, false, false, false]) }}
                                            onBAccept={() => confirmCurrentAction()} />
                                        <ResizePanel
                                            expanded={collapsed[1]}
                                            onBClick={(newat) => { changeEditCollapsed([false, newat, false, false]) }}
                                            onBAccept={() => confirmCurrentAction()} />
                                        <RotatePanel
                                            expanded={collapsed[2]}
                                            onBClick={(newat) => { changeEditCollapsed([false, false, newat, false]) }}
                                            onBAccept={() => confirmCurrentAction()} />
                                        <WatermarkPanel
                                            expanded={collapsed[3]}
                                            onBClick={(newat) => { changeEditCollapsed([false, false, false, newat]) }}
                                            onBAccept={() => confirmCurrentAction()} />
                                    </div>
                                </Grid>
                                <Grid className='project' component='div' container item justify="center">
                                    {buttonToMyProjectBasic}
                                    {buttonToMyProjectRegistered}
                                    <BatchText className={classes.root} > Manage your image packs, browse through your actions history and save all your batches in one place. Your projects autosaves. Available only for registered users.</BatchText>
                                    <RemoveAllImagesBtn />
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </EditContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        editorParams: state.editor.editorParams,
        currentProjectId: state.projects.qurrentProjectId,
        collapsed: state.editor.editorParams.editorStates,
        project: state.editor.project,
        prevHistory: state.editor.prevHistory,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFiles: (filesArray) => dispatch(uploadFiles(filesArray)),
        changeEditCollapsed: (newCollapsed) => {
            dispatch(setCurrentEditorAction({ actionsArray: newCollapsed }))
        },
        confirmCurrentAction: () => dispatch(sendEditRequest()),
        downloadProject: () => dispatch(startDownload()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditImages)
