import React from 'react'
import { Link } from 'react-router-dom'
import BoardPreviewCover from './board_preview_cover'

export const BoardPreviewContainer = (props) => {

    const {board, user, openModal, isUser} = props 
    // board should have access to its pins and the amount of pins

    if (!board) {
        window.location.reload(false) // better way to solve this 
        return null
    }

    const boardName = () => {
        const boardName = board.name.split("")
        if (boardName.length > 20) {
            return boardName.splice(0, 17).join("").concat("...")
        }
        else {
            return board.name
        }
    }

    return (
        <Link to={`/users/${user.username}/boards/${board.name}`}>
            <div className="board-preview-container">
                <div className="board-preview-cover">
                    <BoardPreviewCover 
                    openModal={openModal} 
                    board={board}
                    isUser={isUser}
                    user={user}
                    />
                </div>
                <div className='board-preview-text'>
                    <h1>{boardName()}</h1>
                    <p>{`Pins`}</p> 
                </div>
            </div>
        </Link>
    )

}