import { CLOSE_MODAL } from "../actions/modal_actions";
import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {

    const _nullErrors = [];

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors 
        case RECEIVE_CURRENT_USER: 
            return []
        case CLEAR_ERRORS:
            return _nullErrors;
        case CLOSE_MODAL: 
            return _nullErrors
        default: 
            return state 

    }
}

export default sessionErrorsReducer