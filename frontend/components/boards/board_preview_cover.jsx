import React from 'react'
import EditBoardButton from '../buttons/edit_board_button'

export const BoardPreviewCover = ({openModal, board, isUser, user}) => {

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
            <div onClick={handleEditClick} className={`preview-board-edit ${isUser ? "" : "hide"}`}>
                <EditBoardButton/>
            </div>
        </div>
    )

}


export default BoardPreviewCover