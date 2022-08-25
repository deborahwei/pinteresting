import React from 'react'
import { connect } from 'react-redux'
import { removePinFromBoard, addPinToBoard } from '../../actions/board_pins_actions'
import { unsavePin, savePin } from '../../actions/pins_user_actions'

const SavePinButton = (props) => {
    const {boardId, pinId, boards, currentUser, addPinToBoard, removePinFromBoard, unsavePin, savePin, isOutside} = props

    const savePinToBoard = (e) => {
        e.preventDefault() 
        addPinToBoard(boardId, pinId)
    }
    const savePinToProfile = (e) => {
        e.preventDefault()
        savePin(pinId)
    }
    const unsavePinFromBoard = (e) => {
        e.preventDefault() 
        removePinFromBoard(boardId, pinId)
    }
    const unsavePinFromProfile = (e) => {
        e.preventDefault(pinId) 
        unsavePin(pinId)
    }

    const isProfile = boardId === null || boardId === undefined;

    const isSavedPin = isProfile 
                       ? currentUser.saved_pins.includes(pinId) 
                       : boards[boardId]?.pins.includes(pinId)

    const handleClick = isProfile 
                        ? isSavedPin ? unsavePinFromProfile : savePinToProfile
                        : isSavedPin ? unsavePinFromBoard : savePinToBoard

    return (
        <div onClick={handleClick} className={`save-pin-button ${isSavedPin ? "saved-mode" : "unsaved-mode"}`}>
            <h1 className="save-button-word">
                {isSavedPin ? "Saved" : "Save"}
            </h1>
        </div>
    )

}

const mSTP = ({entities: {boards, users}, session}, props) => {
    return {
        boards,
        currentUser: users[session.id],
    }
}

const mDTP = (dispatch) => {
    return {
        addPinToBoard: (boardId, pinId) => dispatch(addPinToBoard(boardId, pinId)),
        removePinFromBoard: (boardId, pinId) => dispatch(removePinFromBoard(boardId, pinId)),
        unsavePin: (pinId) => dispatch(unsavePin(pinId)),
        savePin: (pinId) => dispatch(savePin(pinId))
    }
}


export default connect(mSTP, mDTP)(SavePinButton)