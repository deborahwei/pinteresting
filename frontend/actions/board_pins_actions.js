import * as BoardPinAPIUtil from '../util/board_pin_api_util';
import { receiveBoard } from './board_actions';
import { receivePins } from './pin_actions';

export const addPinToBoard = (boardId, pinId) => dispatch => (
    BoardPinAPIUtil.addPinToBoard(boardId, pinId).then(board => (
        dispatch(receiveBoard(board))
    ))
)

export const removePinFromBoard = (boardId, pinId) => dispatch => (
    BoardPinAPIUtil.removePinFromBoard(boardId, pinId).then(board => (
        dispatch(receiveBoard(board))
    ))
)

export const fetchBoardPins = (boardId) => dispatch => (
    BoardPinAPIUtil.fetchBoardPins(boardId).then(pins => (
        dispatch(receivePins(pins))
    ))
)