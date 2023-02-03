import React from 'react'
import EditBoardButton from '../buttons/edit_board_button'

const BoardPreviewCover = ({openModal, board, isUser, user, pins}) => {

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
                <div className='cover-panel-1' style={{ backgroundImage: `url(\"${pins[0]?.imageUrl ?? ""}\")`}}/>
                <div className='cover-column-2'>    
                    <div className='cover-panel-2' style={{ backgroundImage: `url(\"${pins[1]?.imageUrl ?? ""}\")`}}/>
                    <div className='cover-panel-3' style={{ backgroundImage: `url(\"${pins[2]?.imageUrl ?? ""}\")`}}/>
                </div>
            </div>
            <div onClick={handleEditClick} className={`preview-board-edit ${isUser ? "" : "hide"}`}>
                <EditBoardButton/>
            </div>
        </div>
    )
}

export default BoardPreviewCover