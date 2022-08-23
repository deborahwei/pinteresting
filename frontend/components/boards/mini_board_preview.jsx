import React from 'react'
import { Link } from 'react-router-dom'
import SavePinButton from '../buttons/save_button'
import { abbreviate } from '../../util/function_util'

const MiniBoardPreview = ({currentUser, board}) => {
    const content = () => {
        return (
            <Link to={`/users/${currentUser.username}/boards/${board.name}`}>
                <div className='mini-board-preview-container'>
                    <div className='mini-board-cover'>
                    </div>
                    <div className="mini-board-info">
                        <div className='mini-board-name'>
                            <h1>{board.name}</h1>
                        </div>
                        <div>
                            <SavePinButton/>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    return content()
}

export default MiniBoardPreview