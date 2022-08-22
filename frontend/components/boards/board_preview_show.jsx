import React from 'react'
import { Link } from 'react-router-dom'
import BoardPreviewCover from './board_preview_cover'
import { MAX_NAME_CHAR } from '../../util/constants_util'

const BoardPreviewContainer = (props) => {

    const {board, user, openModal, isUser, pins} = props 

    const boardName = () => {
        const boardName = board.name.split("")
        if (boardName.length > MAX_NAME_CHAR) {
            return boardName.splice(0, MAX_NAME_CHAR).join("").concat("...")
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
                    pins={pins.slice(0,3)}
                    />
                </div>
                <div className='board-preview-text'>
                    <h1>{boardName()}</h1>
                    <p>{`${pins.length} Pins`}</p> 
                </div>
            </div>
        </Link>
    )

}


export default BoardPreviewContainer