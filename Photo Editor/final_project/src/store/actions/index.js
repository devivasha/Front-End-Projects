import firebase from "firebase";
import fileDownloader from "../../modules/fileDownloader";
import { apiHost, CHANGE_COLLAPSED, CHANGE_EDIT_TYPE, CHANGE_EMAIL, CHANGE_PASSWORD, CONNECT_TO_PROJECT, DELETE_ACCOUNT, FETCH_USER, IMPORT_PROJECT, IS_ENTERED, REPLACE_USER_NEEDED, SEND_FEEDBACK, SET_ERROR, SET_HISTORY, SET_INCONTENTLOADING, SET_LOADING, UNSUBSC_ACCOUNT, UPDATE_EDIT_PARAMS, UPDATE_PROJECTS, USER_UPDATEEMAIL } from "../../store/constants/types";
import { store } from '../index';


export const fetchUser = (slient = false) => async (dispatch) => {
    if (!slient) dispatch(setLoading(true))
    await fetch(apiHost + 'auth/user', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                if (slient) {
                    dispatch({
                        type: FETCH_USER,
                        payload: {}
                    });
                    dispatch({ type: UPDATE_PROJECTS, payload: [] })
                    dispatch({ type: CONNECT_TO_PROJECT, payload: null })
                    dispatch({
                        type: REPLACE_USER_NEEDED,
                        payload: '/'
                    })
                    localStorage.removeItem('Authorization')
                } else {
                    console.error(data)
                    dispatch(createError('Account error', data.message))
                }
            } else {
                console.error(data)
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch({
                    type: FETCH_USER,
                    payload: data.message

                });
            }
            if (!slient) dispatch(setLoading(false))
        })
};

export const sendFeedback = (email, message) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'feedback', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            message
        })
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data)
                dispatch(
                    {
                        type: SEND_FEEDBACK,
                        payload: data.message
                    })
            } else {
                dispatch({
                    type: SEND_FEEDBACK,
                    payload: true
                });
            }
            dispatch(setLoading(false))
        })
}

export const changeUserEmail = (email, password, newEmail) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/changeemail', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            newEmail
        })
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data)
                dispatch(
                    {
                        type: CHANGE_EMAIL,
                        payload: data.message
                    })
            } else {
                dispatch({
                    type: CHANGE_EMAIL,
                    payload: true
                });
                dispatch({
                    type: USER_UPDATEEMAIL,
                    payload: newEmail
                });
            }
            dispatch(setLoading(false))
        })
};

export const changeUserPassword = (email, password, newPassword) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/changepassword', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            newPassword
        })
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data.message)
                dispatch(
                    {
                        type: CHANGE_PASSWORD,
                        payload: false
                    })
            } else {
                localStorage.clear();
                dispatch({
                    type: CHANGE_PASSWORD,
                    payload: true
                });
            }
            dispatch(setLoading(false))
        })
};

export const sendVerify = (email) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/reverify', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
            }
            dispatch(setLoading(false))
        })
};

export const authUser = (email, password) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/signin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(response => response.json())
        .then(async data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch({
                    type: IS_ENTERED,
                    payload: data.message

                });
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                await dispatch({
                    type: FETCH_USER,
                    payload: data.message

                });
                dispatch({
                    type: IS_ENTERED,
                    payload: true

                })
            }
            dispatch(setLoading(false))
        })
};

export const registerUser = (email, password) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data.message);
                dispatch({
                    type: IS_ENTERED,
                    payload: data.message

                });
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch({
                    type: FETCH_USER,
                    payload: data.message

                });
                dispatch({
                    type: IS_ENTERED,
                    payload: true

                })
            }
            dispatch(setLoading(false))
        })
};

export const deleteUserAccount = () => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/deleteaccount', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data)
                dispatch({
                    type: DELETE_ACCOUNT,
                    payload: false

                });
            } else {
                localStorage.clear();
                dispatch({
                    type: DELETE_ACCOUNT,
                    payload: true

                });
            }
            dispatch(setLoading(false))
        })
};

export const unsubscribeUserAccount = () => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'billing/unsubscribe', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data);
                dispatch(createError('Payment Error', data.message))
            } else {
                dispatch({
                    type: UNSUBSC_ACCOUNT,
                    payload: true

                });
                dispatch(fetchUser());
            }
            dispatch(setLoading(false))
        })
};

export const billingUserAccount = () => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'billing/new', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(response => response.json())
        .then(data => {

            if (data.status !== 200) {
                console.error(data);
                if (data.message === undefined) {
                    data.message = 'Please register before payment'
                }
                dispatch(createError('Payment Error', data.message))
            } else {
                window.location.replace(data.message);
            }
            dispatch(setLoading(false))
        })
};


export const sendForgotPassword = (email) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/forgotpassword', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
            }
            dispatch(setLoading(false))
        })
};


export const perfomForgotPassword = (verifyCode, password) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'auth/forgotpassword', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            verifyCode,
            password
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Password recovery message', data.message))
            }
            dispatch(setLoading(false))
        })
};

export const getStarted = () => async (dispatch) => {
    dispatch(setLoading(true))
    if (!localStorage.getItem('Authorization')) {
        await fetch(apiHost + 'auth/tmpsignin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }

        }).then(response => response.json()).then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Authorization message', data.message))
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch({
                    type: FETCH_USER,
                    payload: data.message

                });
            }
        })
    }

    await fetch(apiHost + 'editor/getstarted', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        }
    }).then(response => response.json()).then(data => {
        if (data.status !== 200) {
            console.error(data)
            dispatch(createError('Projects message', data.message))
        } else {
            localStorage.setItem('Authorization', "Bearer " + data.token);
            dispatch({ type: CONNECT_TO_PROJECT, payload: data.message.project.id })
            dispatch({
                type: REPLACE_USER_NEEDED,
                payload: '/edit-images'
            })
        }

    })

    dispatch(setLoading(false))
}

export const addProject = (projectName) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/newproject', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        },
        body: JSON.stringify({ projectName: projectName })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                dispatch(createError('Project warning message', data.message))
            } else {
                dispatch({ type: CONNECT_TO_PROJECT, payload: data.message.project.id })
                dispatch({
                    type: REPLACE_USER_NEEDED,
                    payload: '/edit-images'
                })
            }
            dispatch(setLoading(false))
        })
};

export const renameProject = (project_id, newTitle) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/rename', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            project_id: project_id,
            newTitle: newTitle
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data);
                dispatch(createError('Project warning message', data.message))
            }
            else {
                dispatch(getProjects(1, store.getState().projects.sortBy))
            }
        })
    dispatch(setLoading(false))
}

export const getProjects = (page, sortBy) => async (dispatch) => {
    if (!sortBy) sortBy = store.getState().projects.sortBy
    dispatch(setInContentLoading(true))
    await fetch(apiHost + 'editor/projects', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            sortBy: {
                type: sortBy.type,
                query: sortBy.query
            },
            page
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                if (data.message !== undefined) {
                    dispatch(createError('Projects warning message', data.message))
                }
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                if (page === 1) {
                    dispatch({
                        type: UPDATE_PROJECTS,
                        payload: data.message
                    });
                } else {
                    dispatch({
                        type: UPDATE_PROJECTS,
                        payload: [...store.getState().projects.projects, ...data.message]
                    });
                }
            }
            dispatch(setInContentLoading(false))
        })
}

export const deleteProject = (project_id) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/deleteproject', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            project_id
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Project warning message', data.message))
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                let sortBy = store.getState().projects.sortBy
                dispatch(getProjects(1, sortBy))
            }
            dispatch(setLoading(false))
        })
}


export const getProjectInfo = (project_id, useError = true) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/project', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            project_id
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data, project_id, localStorage.getItem('Authorization'))
                if (useError) {
                    dispatch(createError('Project warning message', data.message))
                } else {
                    dispatch({ type: CONNECT_TO_PROJECT, payload: null })
                }
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch({
                    type: IMPORT_PROJECT,
                    payload: data.message.project
                });
                if (!useError) {
                    dispatch({
                        type: SET_HISTORY,
                        payload: data.message.project.history
                    })
                }
            }
            dispatch(setLoading(false))
        })
}


export const uploadFiles = (acceptedFiles) => async (dispatch) => {
    dispatch(setLoading(true))
    let formData = new FormData();
    formData.append('project_id', store.getState().projects.qurrentProjectId);
    acceptedFiles.forEach(file => {
        formData.append('images[]', file);
    });

    await fetch(apiHost + 'editor/upload', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        },
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Upload warning', data.message))
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch(getProjectInfo(store.getState().projects.qurrentProjectId))
            }
            dispatch(setLoading(false))
        })
}

export const uploadWatermark = (acceptedFile) => async (dispatch) => {
    dispatch(setLoading(true))
    let formData = new FormData();
    formData.append('project_id', store.getState().projects.qurrentProjectId);
    formData.append('image', acceptedFile);

    await fetch(apiHost + 'editor/uploadwatermark', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        },
        body: formData
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Watermark Error', data.message))
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                let pos = data.message.photos.watermarks.length - 1;
                let { width, height } = data.message.photos.watermarks[pos]
                let max = 'height'
                if (width > height) max = 'width';
                let ratio = width / height;
                dispatch({
                    type: UPDATE_EDIT_PARAMS,
                    payload: {
                        ...store.getState().editor.edit.params,
                        ...{
                            all: {
                                ...store.getState().editor.edit.params.all,
                                ...{
                                    type: 'image',
                                    watermark: {
                                        ...data.message.photos.watermarks[pos],
                                        ...{
                                            max,
                                            ratio,
                                            name: acceptedFile.name
                                        }
                                    }
                                }
                            }
                        }
                    },
                });
                dispatch(getProjectInfo(store.getState().projects.qurrentProjectId));
            }
            dispatch(setLoading(false))
        })
}



export const removePhotos = (originArray) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/removephotos', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            project_id: store.getState().projects.qurrentProjectId,
            images: originArray
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status !== 200) {
                console.error(data)
                dispatch(createError('Project warning message', data.message))
                dispatch(getProjectInfo(store.getState().projects.qurrentProjectId))
            } else {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch(getProjectInfo(store.getState().projects.qurrentProjectId))
            }
            dispatch(setLoading(false))
        })
}



export const sendEditRequest = () => async (dispatch) => {
    dispatch(setLoading(true));
    let editParams = store.getState().editor.edit,
        { type, params, photos } = editParams,
        { sizeResizeType, typeWH } = store.getState().editor.editorParams;
    let project = store.getState().editor.project;
    let photoKeys = [], configuredPhotos = [], mainParams = {};

    //setup photos params
    if (type === 'crop' || type === 'rotate') {
        photoKeys = Object.keys(photos);
    } else if (type === 'resize' || type === 'watermark') {
        photos = [];
        project.photos.origin.forEach((element, index) => {
            photos[index] = null
        });
        photoKeys = Object.keys(photos);
    }

    try {
        //setup main Params
        let prews = {}
        switch (type) {
            case 'watermark':

                if (params.all.type === 'image') {
                    prews = {
                        watermark_url: params.all.watermark.url
                    }
                } else if (params.all.type === 'text') {
                    prews = {
                        color: params.all.watermark.color,
                        font_text: params.all.watermark.text
                    }
                }
                mainParams = {
                    watermark_params: {
                        ...prews,
                        ...{
                            type: params.all.type,
                            opacity: params.all.opacity,
                            size: params.all.size,
                            position: [params.all.x, params.all.y]
                        }
                    }
                }

                break;

            default:
                break;
        }

        //setup Photos Object
        photoKeys.forEach(key => {
            let photoObject = {
                url: project.photos.origin[key].url
            }, addPhoto = true;

            switch (type) {
                case 'crop':
                    let useCropWidth = params.all.width, useCropHeight = params.all.height;
                    if (!photos[key].x === undefined) {
                        console.log(photos[key].x, photos[key].y, key)
                        throw new Error('try to move crop containers')
                    }
                    if (photos[key].y === undefined) {
                        console.log(photos[key].x, photos[key].y, key)
                        throw new Error('try to move crop containers')
                    }

                    if (params.cropType === 1) {
                        useCropWidth = photos[key].width;
                        useCropHeight = photos[key].height;
                    }
                    photoObject.crop_params = {
                        x: photos[key].x,
                        y: photos[key].y,
                        width: useCropWidth,
                        height: useCropHeight
                    }
                    break;
                case 'resize':
                    let useEditValue = 'px', useResizeWidth = 'auto', useResizeHeight = 'auto';
                    if (sizeResizeType === 'percent') useEditValue = sizeResizeType
                    if (typeWH === 'ByWidth') useResizeWidth = params.all.width;
                    if (typeWH === 'ByHeight') useResizeHeight = params.all.height;
                    photoObject.resize_params = {
                        editValue: useEditValue,
                        width: useResizeWidth,
                        height: useResizeHeight
                    }
                    break;

                case 'rotate':
                    if (photos[key] === 0 || photos[key] === 360) {
                        addPhoto = false
                    } else {
                        photoObject.rotate_direction = photos[key]
                    }
                    break;

                default:
                    break;
            }
            if (addPhoto) {
                configuredPhotos.push(photoObject)
            }

        });

        console.log('Debug request info', {
            project_id: store.getState().projects.qurrentProjectId,
            data: {
                ...mainParams,
                ...{
                    type,
                    photos: configuredPhotos
                },

            }
        });

        await fetch(apiHost + 'editor/edit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('Authorization')
            },
            body: JSON.stringify({
                project_id: store.getState().projects.qurrentProjectId,
                data: {
                    ...{
                        type,
                        photos: configuredPhotos
                    },
                    ...mainParams,
                }
            })
        }).then(response => response.json())
            .then(data => {
                if (data.status !== 200) {
                    console.error(data)
                    throw new Error(data.message)
                } else {
                    localStorage.setItem('Authorization', "Bearer " + data.token);
                    dispatch({
                        type: IMPORT_PROJECT,
                        payload: data.message.project
                    })
                    dispatch({
                        type: SET_HISTORY,
                        payload: data.message.project.history
                    })
                    dispatch(setCurrentEditorAction({ actionType: 'default' }))
                }
                dispatch(setLoading(false))
            })
    } catch (e) {
        dispatch(setLoading(false))
        if (e.message === 'NetworkError when attempting to fetch resource.') {
            dispatch(projectChecker(5))
        } else if (e.message === 'There are no photos to edit. Please add photos') {
            dispatch(setCurrentEditorAction({ actionType: 'default' }))
        } else {
            dispatch(createError(e.title || 'an error occured', e.message))
        }

    }
}

export const changeHistory = (newHistory, updatePrevHistory) => async (dispatch) => {
    dispatch(setLoading(true))
    await fetch(apiHost + 'editor/changehistory', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            project_id: store.getState().projects.qurrentProjectId,
            newhistory: newHistory

        })
    }).then(response => response.json()).then(data => {
        if (data.status !== 200) {
            if (data.message === 'NetworkError when attempting to fetch resource.') {
                dispatch(projectChecker(5, updatePrevHistory))
            } else {
                dispatch(createError(data.title || 'an error occured', data.message))
            }
        } else {
            localStorage.setItem('Authorization', "Bearer " + data.token);
            dispatch({
                type: IMPORT_PROJECT,
                payload: data.message.project
            })
            if (updatePrevHistory) {
                dispatch({
                    type: SET_HISTORY,
                    payload: data.message.project.history
                })
            }
            dispatch(setCurrentEditorAction({ actionType: 'default' }))
        }
        dispatch(setLoading(false))
    })
}


// SERVICE
export const setLoading = (payload) => async (dispatch) => {
    dispatch({
        type: SET_LOADING,
        payload
    })
}
export const setInContentLoading = (payload) => async (dispatch) => {
    dispatch({
        type: SET_INCONTENTLOADING,
        payload
    })
}
const projectChecker = (attempts, updateHistory = true) => async (dispatch) => {
    let chdf = false;
    dispatch(setLoading(true))
    for (let index = 0; index < attempts; index++) {
        if (chdf === false)
            await fetch(apiHost + 'editor/project', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem('Authorization')
                },
                body: JSON.stringify({
                    project_id: store.getState().projects.qurrentProjectId
                })
            }).then(response => response.json())
                // eslint-disable-next-line no-loop-func
                .then(data => {
                    if (data.status === 200 && JSON.stringify(data.message.project.photos) !== JSON.stringify(store.getState().editor.project.photos)) {
                        chdf = true;
                        dispatch({
                            type: IMPORT_PROJECT,
                            payload: data.message.project
                        });
                        if (updateHistory) {
                            dispatch({
                                type: SET_HISTORY,
                                payload: data.message.project.history
                            })
                        }
                    }
                })
    }
    if (chdf === true) {
        dispatch(setLoading(false))
        dispatch(setCurrentEditorAction({ actionType: 'default' }))
    } else {
        dispatch(createError('Server connect error', 'Can`t connect to server. Try later'))
    }
}

export const setCurrentEditorAction = ({ actionsArray, actionType }) => async (dispatch) => {
    if (store.getState().editor.project.photos.origin.length > 0) {
        if (actionsArray) {
            if (actionsArray[0] === true) {
                actionType = 'crop'
            } else if (actionsArray[1] === true) {
                actionType = 'resize'
            } else if (actionsArray[2] === true) {
                actionType = 'rotate'
            } else if (actionsArray[3] === true) {
                actionType = 'watermark'
            } else if (actionsArray[4] === true) {
                actionType = 'others'
            } else {
                actionType = 'default'
            }
        } else {
            if (actionType === 'crop') {
                actionsArray = [true, false, false, false, false]
            } else if (actionType === 'resize') {
                actionsArray = [false, true, false, false, false]
            } else if (actionType === 'rotate') {
                actionsArray = [false, false, true, false, false]
            } else if (actionType === 'watermark') {
                actionsArray = [false, false, false, true, false]
            } else if (actionType === 'others') {
                actionsArray = [false, false, false, false, true]
            } else {
                actionsArray = [false, false, false, false, false]
            }
        }
        dispatch({
            type: CHANGE_EDIT_TYPE,
            payload: actionType
        })
        dispatch({
            type: CHANGE_COLLAPSED,
            payload: actionsArray
        })
    }
}

export const startDownload = () => async (dispatch) => {
    dispatch(setLoading(true))
    await fileDownloader(store.getState().projects.qurrentProjectId)
    dispatch(setLoading(false))
}



export const createError = (title, message) => async (dispatch) => {
    dispatch({
        type: SET_ERROR,
        payload: {
            title,
            message
        }
    })
}


export const signInWithSocial = (type) => async (dispatch) => {
    dispatch(setLoading(true));
    let email, uid;
    if (type === 'google') {
        const provider = new firebase.auth.GoogleAuthProvider();

        await firebase.auth().signInWithPopup(provider).then(res => {
            const user = res.user;
            email = user.email;
            uid = user.uid;
        }).catch(err => {
            console.error(err)
            dispatch(createError(type + 'authentication error', 'during authentication an error occurred'))
        });

    } else if (type === 'facebook') {
        const provider = new firebase.auth.FacebookAuthProvider()

        await firebase.auth().signInWithPopup(provider).then(res => {
            const user = res.user;
            email = user.email;
            uid = user.uid;
        }).catch(err => {
            console.error(err)
            dispatch(createError(type + 'authentication error', 'during authentication an error occurred'))
        });

    }

    await fetch(apiHost + 'auth/socialsign', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, uid
        })
    }).then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                localStorage.setItem('Authorization', "Bearer " + data.token);
                dispatch({
                    type: FETCH_USER,
                    payload: data.message
                });
            } else {
                console.error(data)
                dispatch(createError(type + 'authentication error', 'during authentication an error occurred'))
            }
            dispatch(setLoading(false))
        })

}
