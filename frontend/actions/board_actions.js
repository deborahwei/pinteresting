import * as BoardAPIUtil from '../util/board_api_util'

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';


export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards
});

export const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});


export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS, 
  errors
})

export const fetchBoards = userId => dispatch => (
  BoardAPIUtil.fetchBoards(userId).then(boards => (
    dispatch(receiveBoards(boards))
  ))
);

export const fetchBoard = (userId, boardId) => dispatch => (
  BoardAPIUtil.fetchBoard(userId, boardId).then((board) => {
    dispatch(receiveBoard(board))
  })
);

export const createBoard = (board) => dispatch => (
  BoardAPIUtil.createBoard(board).then((board) => {
    dispatch(receiveBoard(board))
  }, err => {
    return dispatch(receiveBoardErrors(err.responseJSON))
  })
);
 

export const updateBoard = (board) => dispatch => (
  BoardAPIUtil.updateBoard(board).then((board) => {
    dispatch(receiveBoard(board))
  }, err => {
    return dispatch(receiveBoardErrors(err.responseJSON))
  }
  )
);

export const deleteBoard = (boardId) => dispatch => (
  BoardAPIUtil.deleteBoard(boardId).then(() => (
    dispatch(receiveBoard(boardId))
    ))
); 

export const fetchBoardByName = (userId, name) => dispatch => {
  return BoardAPIUtil.fetchBoardByName(userId, name).then(board => (
      dispatch(receiveBoard(board))
  ))
}

export const fetchUserBoardsByUsername = (username) => dispatch => (
  BoardAPIUtil.fetchUserBoardsByUsername(username).then(boards => (
      dispatch(receiveBoards(boards))
  ))  
)


