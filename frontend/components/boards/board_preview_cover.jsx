import React from 'react'
import EditBoardButton from '../buttons/edit_board_button'
import { fetchBoardPins } from '../../actions/board_pins_actions'

export const BoardPreviewCover = ({openModal, board, isUser, user, fetchBoardPins}) => {

    const handleEditClick = (e) => {
        e.preventDefault()
        openModal("edit board", 
        {
            boardName: board.name, 
            path: `/users/${user.username}`
        })
    }
    return (
        <div className="board-preview-cover-container"> 
            <div className="board-cover-pictures">
                <div className='cover-panel-1'>
                    
                </div>
                <div className='cover-column-2'>
                    <div className='cover-panel-2'>

                    </div>
                    <div className='cover-panel-3'>

                    </div>
                </div>
            </div>
            <div onClick={handleEditClick} className={`preview-board-edit ${isUser ? "" : "hide"}`}>
                <EditBoardButton/>
            </div>
        </div>
    )

}

const mDTP = dispatch => {
    return {
        fetchBoardPins: (boardId) => dispatch(fetchBoardPins(boardId))
    }
}


export default connect(null, mDTP)(BoardPreviewCover)