import { Zoom } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import React from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Arrows from "../../../containers/EditImages/Arrows";
import RemoveAllImagesBtn from "../../../containers/EditImages/RemoveAllButton";
import { sendEditRequest, setCurrentEditorAction, startDownload, uploadFiles } from "../../../store/actions";
import CustomButtonGrey from "../../Global/CustomButtonGrey";
import "../BatchPanel.scss";
import '../MobilePanel.scss';




const LongButton = withStyles({
    root: {
        borderRadius: 1,
        border: "1px solid #8D8D8D",
        height: 32,
        width: 281,
        fontFamily: "Montserrat, sans-serif",
        textTransform: "capitalize",
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 13,
        color: "#3D3A3A",
        textDecoration: 'none',
        cursor: 'pointer',
        "@media (min-width:600px)": {
            height: 43,
            marginTop: 0,
            marginBottom: 0,
        },
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

function OtherExpansionPanels({ expanded, currentProjectId, prevHistory, project, downloadProject, uploadFiles }) {
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

    const arrows = (project.photos.origin.length > 0 && currentProjectId !== null) === true && (
        <div>
            <Arrows backArrow={backArrow} forwardArrow={forwardArrow} />
        </div>
    );
    const batchHeader = (project.photos.origin.length > 0) && <Grid component='div' container justify="flex-start">
        <Grid component='div' container item justify="center" xs={false} sm={false} md={2} lg={2} xl={2}>
        </Grid>
        <Grid component='div' container item justify="center" xs={12} sm={4} md={3} lg={3} xl={3}>
            {arrows}
        </Grid>
        <Grid onClick={() => downloadProject()} component='div' container item justify="center" xs={6} sm={4} md={3} lg={3} xl={3}>
            <CustomButtonGrey title={'Download'} />
        </Grid>
        <Grid {...getRootProps()} component='div' container item justify="center" xs={6} sm={4} md={3} lg={3} xl={3}>
            <input {...getInputProps()} />
            <CustomButtonGrey title={'Add images'} />
        </Grid>
    </Grid>

    return (
        <Zoom in={expanded}>
            <div style={{
                position: "absolute",
                marginTop: 81,
                width: 317,
                height: 216,
                marginLeft: 1,
                backgroundColor: "#EEEEEE",
                border: '1px solid #3D3A3A',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
                display: 'block',
                padding: 0
            }}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    component={'div'}
                >

                    <Grid
                        container
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        component={"div"}
                        xs={12}
                    >
                        {batchHeader}
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justify="center"
                        alignItems="center"
                        component={"div"}
                        xs={12}
                        style={{ marginTop: -25 }}
                    >
                        <Grid className='project' component='div' container item justify="center" >
                            <NavLink exact to="/projects" style={{ textDecoration: 'none', marginTop: 20 }}><LongButton className={classes.root}><CreateNewFolderIcon style={{ marginRight: 11 }} /> My projects </LongButton></NavLink>
                            <RemoveAllImagesBtn />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Zoom>
    );
}

const mapStateToProps = (state) => {
    return {
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
export default connect(mapStateToProps, mapDispatchToProps)(OtherExpansionPanels)
