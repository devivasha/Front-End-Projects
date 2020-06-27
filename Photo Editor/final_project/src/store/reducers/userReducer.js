import { FETCH_USER, USER_UPDATEEMAIL } from "../../store/constants/types";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload
        case USER_UPDATEEMAIL:
            return {
                ...state,
                ...{
                    email: action.payload
                }
            }
        default:
            return state;
    }
}

export default userReducer;