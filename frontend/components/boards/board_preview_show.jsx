import React from 'react'
import { Link } from 'react-router-dom'
import BoardPreviewCover from './board_preview_cover'

export const BoardPreviewContainer = (props) => {

    const {board, user, openModal, isUser} = props 
    // board should have access to its pins and the amount of pins


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
                    <h1>{board.name}</h1>
                    <p>{`Pins`}</p> 
                </div>
            </div>
        </Link>
    )

}