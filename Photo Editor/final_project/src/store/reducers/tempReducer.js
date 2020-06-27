import { BILLING_ACCOUNT, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_SNACK, DELETE_ACCOUNT, IS_ENTERED, REPLACE_USER_NEEDED, SEND_FEEDBACK, SET_ERROR, SET_INCONTENTLOADING, SET_LOADING, SHOW_PLANS_MODAL, UNSUBSC_ACCOUNT } from "../../store/constants/types";

const initialUserState = {
    emailsuccessfullyChanged: null,
    accountDeleted: null,
    isCompletlyEntered: null,
    passwordSuccessfullyChanged: null,
    accountUnsubscribe: null,
    accountBilling: null,
    loading: false,
    inContentLoading: false,
    planShow: false,
    error: false,
    replaceUser: false,
    openSnakBar: false,
    feedbackSent: null,
};
const tempReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return {
                ...state,
                ...{
                    emailsuccessfullyChanged: action.payload
                }
            }

        case CHANGE_PASSWORD:
            return {
                ...state,
                ...{
                    passwordSuccessfullyChanged: action.payload
                }
            }

        case DELETE_ACCOUNT:
            return {
                ...state,
                ...{
                    accountDeleted: action.payload
                }
            }
        case SEND_FEEDBACK:
            return {
                ...state,
                ...{
                    feedbackSent: action.payload
                }
            }
        case UNSUBSC_ACCOUNT:
            return {
                ...state,
                ...{
                    accountUnsubscribe: action.payload
                }
            }
        case BILLING_ACCOUNT:
            return {
                ...state,
                ...{
                    accountBilling: action.payload
                }
            }

        case IS_ENTERED:
            return {
                ...state,
                ...{
                    isCompletlyEntered: action.payload
                }
            }

        case SET_LOADING:
            return {
                ...state,
                ...{
                    loading: action.payload
                }
            }

        case SET_INCONTENTLOADING:
            return {
                ...state,
                ...{
                    inContentLoading: action.payload
                }
            }

        case SHOW_PLANS_MODAL:
            return {
                ...state,
                ...{
                    planShow: action.payload
                }
            }

        case SET_ERROR:
            return {
                ...state,
                ...{
                    error: action.payload
                }
            }

        case REPLACE_USER_NEEDED:
            return {
                ...state,
                ...{
                    replaceUser: action.payload
                }
            }
        case CHANGE_SNACK:
            return {
                ...state,
                ...{
                    openSnakBar: action.payload
                }
            }

        default:
            return state;
    }
}

export default tempReducer;
