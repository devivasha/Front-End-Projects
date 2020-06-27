import { Box } from "@material-ui/core";
import "cropperjs/dist/cropper.css";
import React from "react";
import Cropper from "react-cropper";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { store } from "../../store";
import { createError, getProjectInfo, removePhotos, setCurrentEditorAction, setLoading, uploadFiles } from "../../store/actions";
import { UPDATE_EDIT_PARAMS, UPDATE_PHOTOS_PARAMS } from "../../store/constants/types";
import ResizeImgContainer from "./ResizePhotoContainer";
import RotateImgContainer from "./RotatePhotoContainer";
import useStyles from "./styles";
import Watermark from './WatermarkContainer/';

let prevShowType = "default";
let pervUser;
let prevProjects;

function CroppmanDropzone({ createError, setEditor, user, projects, showType, showParams, currentProjectId, project, uploadFiles, removePhotos, loadProject, photosParams, updateActionParams, updatePhotosParams, setLoading },) {
    const history = useHistory()
    if (project === undefined || project.id === null || project.id !== currentProjectId || pervUser !== user || prevProjects !== projects) {
        console.log(currentProjectId, 'project id')
        if (currentProjectId !== null) {
            pervUser = user;
            prevProjects = projects
            loadProject(currentProjectId, false);
        } else {
            history.push('/projects')
        }

    }
    const classes = useStyles();
    let imageRefs = [];
    let imagesData = [];
    let readyTimesIn = 0;
    let parentRef = React.useRef();

    if (prevShowType !== showType) {
        prevShowType = showType;
        if (showType !== "default" && showType !== "others") {
            setLoading(true);
            if (showType === "rotate") {
                let selected = []
                project.photos.last.forEach((element, index) => {
                    updatePhotosParams(index, 0);
                    imagesData[index] = 0;
                    selected.push(true)
                });
                updateActionParams({
                    ...showParams,
                    ...{
                        selected
                    }
                })
                setLoading(false)
            } else if (showType === "resize") {
                if (project.photos.last.length > 0) {
                    let wmin = project.photos.last[0].width,
                        hmin = project.photos.last[0].height,
                        dcount = 0, photoRatio;
                    project.photos.last.forEach(({ width, height }) => {
                        if (wmin === width && hmin === height) {
                            dcount++
                        } else {
                            if (width < wmin) wmin = width;
                            if (height < hmin) hmin = height;
                        }
                    });
                    if (dcount === project.photos.last.length) {
                        photoRatio = wmin / hmin
                    }
                    updateActionParams({
                        ...showParams,
                        ...{
                            all: {
                                width: wmin,
                                height: hmin,
                                ident: dcount === project.photos.last.length ? true : false,
                                ratio: dcount === project.photos.last.length ? photoRatio : false,
                                wold: wmin,
                                hold: hmin,
                                wpercent: 100,
                                hpercent: 100
                            }
                        }
                    })
                }
                setLoading(false)
            } else if (showType === 'watermark') {
                updateActionParams({
                    ...showParams,
                    ...{
                        all: {
                            transparency: 0,
                            x: 100,
                            y: 100,
                            size: 25,
                            type: null,
                            opacity: 100,
                            watermark: {
                                color: '#000000'
                            }
                        }
                    }
                });
                setLoading(false)
            }

            if (project.photos.last.length === 0) {
                setLoading(false)
            }
        }
    }

    for (let index = 0; index < project.photos.last.length; index++) {
        let link = project.photos.last[index].url;
        if (showType === "default" || showType === "others") {
            imageRefs[index] = <img className={classes.image} src={link} alt="img" />;
        } else if (showType === "crop") {
            imageRefs[index] = (
                <Cropper className={classes.image} src={link} alt="img" scalable={false} zoomable={false} movable={false} viewMode={0} data={showParams.all}
                    ready={(event) => {
                        configFirstCropSizes({
                            container: event.target.cropper.getData(),
                            image: event.target.cropper.imageData,
                        });
                    }}
                    cropmove={() => {
                        appendNewCropSizeToAll(index);
                    }} />
            );
        } else if (showType === "resize") {
            imageRefs[index] = (
                <ResizeImgContainer src={link} className={classes.image} />
            );
        }
        else if (showType === 'watermark') {
            imageRefs[index] = (
                <Watermark src={link} className={classes.image} index={index} />
            )
        }

        else if (showType === "rotate") {
            let nowDegree, nowSelected;
            if (photosParams === undefined) {
                nowDegree = imagesData[index];
            } else {
                nowDegree = photosParams[index];
            }
            if (showParams.selected === undefined) {
                nowSelected = false
            } else {
                nowSelected = showParams.selected[index]
            }
            imageRefs[index] = (
                <RotateImgContainer src={link} className={classes.image} degrees={nowDegree} selected={nowSelected}
                    changeSelected={() => {
                        let selected = showParams.selected;
                        selected[index] = !showParams.selected[index]
                        updateActionParams({
                            ...showParams,
                            ...{
                                selected
                            }
                        })
                    }} />
            );
        }
    }

    const configFirstCropSizes = (imgObj) => {
        if (imgObj.container.width === 0 || imgObj.container.height === 0) {
            imgObj.container.width = imgObj.image.naturalWidth / 1.25;
            imgObj.container.height = imgObj.image.naturalHeight / 1.25;
        }
        imagesData.push(imgObj);
        readyTimesIn++;
        if (readyTimesIn === project.photos.last.length) {
            let wmin = imagesData[0].container.width,
                hmin = imagesData[0].container.height,
                wimin = imagesData[0].image.naturalWidth,
                himin = imagesData[0].image.naturalHeight;
            imagesData.forEach(({ container, image }, id) => {
                updatePhotosParams(id, {
                    x: container.x,
                    y: container.y,
                });

                let cwidth = container.width,
                    cheight = container.height;
                let iwidth = image.naturalWidth,
                    iheight = image.naturalHeight;

                if (cwidth < wmin) wmin = cwidth;
                if (cheight < hmin) hmin = cheight;

                if (iwidth < wimin) wimin = iwidth;
                if (iheight < himin) himin = iheight;
            });

            showParams.all = {
                width: wmin,
                height: hmin,
            };
            showParams.restrictions = {
                width: wimin,
                height: himin,
            };
            showParams.ratio = {
                enabled: false,
                current: wmin / hmin
            }
            updateActionParams({
                ...showParams,
                ...{
                    cropType: 2
                }
            });
        }
        setLoading(false);
    };
    const appendNewCropSizeToAll = (id) => {
        let { cropType } = store.getState().editor.edit.params
        parentRef.current.childNodes.forEach((image, index) => {
            let container = image.childNodes[0].childNodes[0].childNodes[0].cropper.getData();
            updatePhotosParams(index, {
                x: container.x,
                y: container.y,
                width: container.width,
                height: container.height
            });
            if (index === id && cropType === 2) {
                if (container.width > showParams.restrictions.width)
                    container.width = showParams.restrictions.width;
                if (container.height > showParams.restrictions.height)
                    container.height = showParams.restrictions.height;
                updateActionParams({
                    ...showParams,
                    ...{
                        all: {
                            width: container.width,
                            height: container.height,
                        },
                    },
                });
            }
        });
    };

    function getRandomInt(min = 0, max = 999) {
        if (showType === "default" || showType === "resize") {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        } else {
            return 0;
        }
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            uploadFiles(acceptedFiles);
        },
    });

    const thumbs = imageRefs.map((img) => (

        <div className={classes.thumb} key={img.props.src + getRandomInt()}>
            <div className={classes.thumbInner}>{img}</div>
            <div
                className={
                    showType === "default" ? classes.squareForCross : classes.delBtnHidden
                }
                name={img.props.src}
                onClick={() => {
                    let pos = project.photos.last.map(photo => {
                        return photo.url
                    }).indexOf(img.props.src);
                    removePhotos([
                        project.photos.origin[pos].url,
                    ]);
                }}
            >
                <img
                    src="/images/Modals/close_white.svg"
                    className={classes.crossToClosePhoto}
                    name={img.props.src}
                    alt="img"
                />
            </div>

        </div>
    ));

    const mainElement = (project.photos.origin.length === 0) === true && (
        <div className={classes.dropAreaGlobal}>
            <Box {...getRootProps()} className={classes.dropzoneImage}>
                <input {...getInputProps()} />
                <img src="/images/Modals/uploadFile.svg" alt="img" />
            </Box>
            <p className={classes.textInDrop}>
                drop your images here
        <br />
        or{" "}
            </p>
            <Box {...getRootProps()} className={classes.dropzone}>
                <Box className={classes.styledButton}>Browse from computer</Box>
            </Box>
        </div>
    );
    const projectName = (project.photos.origin.length > 0) === true && user.plan !== 'temp' && <div className={classes.projectName}>{project.title}</div>
    return (
        <section
            className={
                project.photos.origin.length === 0
                    ? classes.container
                    : showType === "default" ? classes.containerIsHidden : classes.containerEditor
            }
        >
            {projectName}
            {mainElement}
            <aside className={classes.thumbContainer} ref={parentRef}>
                {thumbs}
            </aside>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        showType: store.getState().editor.edit.type,
        showParams: state.editor.edit.params,
        photosParams: state.editor.edit.photos,
        currentProjectId: state.projects.qurrentProjectId,
        project: state.editor.project,
        user: state.user,
        projects: state.projects.projects,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFiles: (filesArray) => dispatch(uploadFiles(filesArray)),
        removePhotos: (originArray) => dispatch(removePhotos(originArray)),
        loadProject: (project_id, err) => dispatch(getProjectInfo(project_id, err)),
        updateActionParams: (newParams) =>
            dispatch({
                type: UPDATE_EDIT_PARAMS,
                payload: newParams,
            }),
        updatePhotosParams: (photoId, params) =>
            dispatch({
                type: UPDATE_PHOTOS_PARAMS,
                payload: {
                    id: photoId,
                    params,
                },
            }),
        setLoading: (type) => dispatch(setLoading(type)),
        setEditor: (type) => dispatch(setCurrentEditorAction({ actionType: type })),
        createError: (title, message) => dispatch(createError(title, message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CroppmanDropzone);
