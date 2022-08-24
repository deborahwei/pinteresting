import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { REMOVE_BOARD } from "../actions/board_actions";

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