import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { REMOVE_BOARD, RECEIVE_BOARD } from "../actions/board_actions";
import { REMOVE_SAVED_PIN, RECEIVE_SAVED_PIN} from "../actions/pins_user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: 
            nextState[action.currentUser.id] = action.currentUser;
            return nextState
        case RECEIVE_USER: 
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_USERS:
            Object.assign(nextState, action.users)
            return nextState;
        case RECEIVE_BOARD:
            if (!nextState[action.board.user_id].boards.includes(action.board.id))
                nextState[action.board.user_id].boards.push(action.board.id) 
            return nextState;
        case REMOVE_SAVED_PIN:
            const userSavedPins = nextState[action.user.id].saved_pins
            const newPins = userSavedPins.filter((pinId) => pinId !== action.pinId) 
            nextState[action.user.id].saved_pins = newPins    
            return nextState;
        case RECEIVE_SAVED_PIN:
            const currentUser = nextState[action.userId]
            if (!currentUser.saved_pins.includes(action.pin.id))
                currentUser.saved_pins.push(action.pin.id) 
            return nextState;
        case REMOVE_BOARD:
            const userBoards = nextState[action.user.id].boards
            const newBoards = userBoards.filter((boardId) => boardId !== action.boardId)
            nextState[action.user.id].boards = newBoards
            return nextState
        default: 
            return state
    }
}

export default usersReducer