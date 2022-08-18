import { 
    RECEIVE_BOARD, 
    RECEIVE_BOARDS,
    REMOVE_BOARD
} from '../actions/board_actions'

const boardsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state) 
    
    switch (action.type) {
        case RECEIVE_BOARD: 
            nextState[action.board.id] = action.board;
            return nextState
        case RECEIVE_BOARDS: 
            const boards = Object.values(action.boards)

            boards.forEach(board => {
                nextState[board.id] = board;
            })
            return nextState
        case REMOVE_BOARD: 
            delete nextState[action.boardId];
            return nextState
        default: 
            return state
    }
}

export default boardsReducer