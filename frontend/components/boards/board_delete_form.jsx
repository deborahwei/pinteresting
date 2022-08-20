import React from 'react'
import { deleteBoard } from '../../actions/board_actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"; 
import { openModal, closeModal } from '../../actions/modal_actions';

const DeleteBoardForm = (props) => {

    const {deleteBoard, openModal, closeModal, board, currentUser, path} = props;
    const history = useHistory();

    const handleDeleteClick = (e) => {
        e.preventDefault();
        deleteBoard(board.id)
            .then(()=> {
                history.push(`${path}`);
            })
                .then(() => {
                    closeModal()
                });
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        openModal("edit board", board?.name)
        closeModal()
    }

    return (
        <div className='delete-board-modal-container'>
            <div>
                <h1>Are you sure?</h1>
                <p>Once you delete a board and all its Pins, you can't undo it!</p>
            </div>
            <div className="delete-board-options">
                <div onClick={handleCancelClick} className='cancel-delete-board'>
                    <h3>Cancel</h3>
                </div>
                <div onClick={handleDeleteClick}className='delete-board-button'>
                    <h3>Delete forever</h3>
                </div>
            </div>
        </div>
    )
}

const mSTP = ({ui: {modal: {props}}}) => {
    return {
        board: props.board,
        currentUser: props.currentUser, 
        path: props.path
    }
}

const mDTP = dispatch => {
    return {
        deleteBoard: (board) => dispatch(deleteBoard(board)),
        closeModal: () => dispatch(closeModal()), 
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(DeleteBoardForm)