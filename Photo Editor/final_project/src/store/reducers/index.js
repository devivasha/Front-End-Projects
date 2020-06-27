import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tempReducer from './tempReducer';
import projectReducer from './projectReducer';
import editorReducer from './editorReducer'

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userReducerConfig = {
    key: "user",
    storage
}

const projectReducerConfig = {
    key: "projects",
    storage
}
const rootReducer = combineReducers({
    user: persistReducer(userReducerConfig, userReducer),
    temp: tempReducer,
    projects: persistReducer(projectReducerConfig, projectReducer),
    editor: editorReducer
});

export default rootReducer
