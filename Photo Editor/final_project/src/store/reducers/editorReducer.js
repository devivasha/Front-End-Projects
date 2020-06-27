import { CHANGE_COLLAPSED, CHANGE_CROP_SIZE, CHANGE_EDIT_TYPE, CHANGE_RESIZE_SIZE, CHANGE_TYPEWH, IMPORT_PROJECT, SET_HISTORY, UPDATE_EDIT_PARAMS, UPDATE_PHOTOS_PARAMS } from "../constants/types";

const initialUserState = {
    project: {
        "photos": {
            "origin": [],
            "last": [],
            "watermarks": []
        },
        "history": [],
        "id": null,
        "title": "Loading",
        "createdAt": "1",
        "updatedAt": "1",
    },
    prevHistory: [],
    editorParams: {
        sizeCropType: 'px',
        avalibleSizeCropTypes: [
            {
                value: 'px',
                label: "px",
            },
            {
                value: 'mm',
                label: "mm",
            },
        ],
        sizeResizeType: 'px',
        avalibleSizeResizeTypes: [
            {
                value: 'px',
                label: "px",
            },
            {
                value: 'mm',
                label: "mm",
            },
            {
                value: 'percent',
                label: "%",
            },
        ],
        sizeWatermarkType: 'percent',

        typeWH: 'ByWidth',
        avalibleTypeWH: [
            {
                value: "ByWidth",
                label: "By width",
            },
            {
                value: "ByHeight",
                label: "By height",
            }
        ],
        editorStates: [false, false, false, false, false]
    },
    edit: {
        type: 'default',
        params: {
            all: {},
            photos: {}
        },
        photos: {}
    }
};

const editorReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case IMPORT_PROJECT:
            return {
                ...state,
                ...{ project: action.payload }
            }

        case SET_HISTORY:
            return {
                ...state,
                ...{
                    prevHistory: action.payload
                }
            }

        case CHANGE_CROP_SIZE:
            return {
                ...state,
                ...{
                    editorParams: {
                        ...state.editorParams,
                        ...{ sizeCropType: action.payload }

                    }
                }
            }
        case CHANGE_RESIZE_SIZE:
            return {
                ...state,
                ...{
                    editorParams: {
                        ...state.editorParams,
                        ...{ sizeResizeType: action.payload }

                    }
                }
            }

        case CHANGE_TYPEWH:
            return {
                ...state,
                ...{
                    editorParams: {
                        ...state.editorParams,
                        ...{ typeWH: action.payload }

                    }
                }
            }

        case CHANGE_EDIT_TYPE:
            return {
                ...state,
                ...{
                    edit: {
                        type: action.payload,
                        params: {
                            all: {},
                            photos: {}
                        },
                    }
                }
            }
        case CHANGE_COLLAPSED:
            return {
                ...state,
                ...{
                    editorParams: {
                        ...state.editorParams,
                        ...{ editorStates: action.payload }
                    }
                }
            }

        case UPDATE_EDIT_PARAMS:
            return {
                ...state,
                ...{
                    edit: {
                        ...state.edit,
                        ...{
                            params: {
                                ...state.edit.params,
                                ...action.payload
                            }
                        }
                    }
                }
            }

        case UPDATE_PHOTOS_PARAMS:
            return {
                ...state,
                ...{
                    edit: {
                        ...state.edit,
                        ...{
                            photos: {
                                ...state.edit.photos,
                                ...{
                                    [action.payload.id]: action.payload.params
                                }
                            }
                        }
                    }
                }
            }

        default:
            return state;
    }
}

export default editorReducer;