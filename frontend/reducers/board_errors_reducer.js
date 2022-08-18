import { CLOSE_MODAL } from "../actions/modal_actions";
import { CLEAR_ERRORS} from "../actions/session_actions";
import { RECEIVE_BOARD_ERRORS } from "../actions/board_actions";

const boardErrorsReducer = (state = [], action) => {
    
    const _nullErrors = [];

    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors 
        case CLEAR_ERRORS:
            return _nullErrors;
        case CLOSE_MODAL: 
            return _nullErrors
        default: 
            return state 

    }
}

export default boardErrorsReducer