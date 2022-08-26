import React from 'react'
import { abbreviate } from '../../util/function_util'
import { MAX_TITLE_CHAR } from '../../util/constants_util'
import { Link } from 'react-router-dom'
import MiniBoardCover from '../boards/mini_board_cover'

const SearchBoardPreview = ({board, query}) => {
    
    if (!board) return null


    const show = board?.name.toLowerCase().includes(query.toLowerCase())

    const content = () => {
        return (
            <Link to={`/boards/${board.name}`}>
                <div 
                    className={`mini-board-preview-container ${show ? "" : "hide"}`}>
                    <div className='mini-board-cover-container'>
                        <MiniBoardCover pinId={board?.pins[0]} />
                    </div>
                    <div className="mini-board-info">
                        <div className='mini-board-name'>
                            <h1>{abbreviate(board?.name ?? "Profile", MAX_TITLE_CHAR)}</h1>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return content()
}

export default SearchBoardPreview