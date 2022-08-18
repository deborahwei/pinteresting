import React from 'react'
import { closeModal } from '../../actions/modal_actions'
import { createBoard } from '../../actions/board_actions'

const CreateBoardForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const board = Object.assign({},state)
        createBoard(board)
    }
    return (
        <div>
        </div>
    )
}

export default CreateBoardForm