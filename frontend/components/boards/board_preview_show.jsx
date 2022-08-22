import React from 'react'
import { Link } from 'react-router-dom'
import BoardPreviewCover from './board_preview_cover'
import { MAX_NAME_CHAR } from '../../util/constants_util'
import { timeSince } from '../../util/time_util'

const BoardPreviewContainer = (props) => {

    const {board, user, openModal, isUser, pins} = props 
    if (!board) return null

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
                    <div className='board-preview-subtext'>
                        <p>{`${pins.length} Pins`}</p> 
                        <p>{timeSince(board.created_at)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )

}


export default BoardPreviewContainer