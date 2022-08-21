import * as BoardPinAPIUtil from '../util/board_pin_api_util';
import { receiveBoard } from './board_actions';
import { receivePins } from './pin_actions';

export const addPinToBoard = (boardId, pinId) => (
    BoardPinAPIUtil.addPinToBoard(boardId, pinId).then(board => (
        dispatch(receiveBoard(board))
    ))
)

export const removePinFromBoard = (boardId, pinId) => {
    BoardPinAPIUtil.removePinFromBoard(boardId, pinId).then(board => (
        dispatch(receiveBoard(board))
    ))
}

export const fetchBoardPins = (boardId) => {
    BoardPinAPIUtil.fetchBoardPins(boardId).then(pins => (
        dispatch(receivePins(pins))
    ))
}