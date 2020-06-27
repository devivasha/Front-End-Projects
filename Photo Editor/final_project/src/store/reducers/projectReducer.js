import { UPDATE_PROJECTS, SORT_BY, CONNECT_TO_PROJECT } from "../../store/constants/types";

const initialUserState = {
    sortBy: {
        type: "createdAt",
        query: 'desc'
    },
    projects: [],
    qurrentProjectId: null,
};

const projectReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case UPDATE_PROJECTS:
            return {
                ...state,
                ...{ projects: action.payload }
            }
        case SORT_BY:
            return {
                ...state,
                ...{ sortBy: action.payload }
            }
        case CONNECT_TO_PROJECT:
            return {
                ...state,
                ...{ qurrentProjectId: action.payload }
            }
        default:
            return state;
    }
}

export default projectReducer;