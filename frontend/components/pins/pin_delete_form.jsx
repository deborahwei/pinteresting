import React from 'react'
import { deletePin } from '../../actions/pin_actions';
import { useHistory } from "react-router-dom"; 
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const DeleteBoardForm = (props) => {

    const {deletePin, openModal, closeModal, currentUser, pin} = props;
    const history = useHistory();


    const handleDeleteClick = (e) => {
        e.preventDefault();
        deletePin(pin.id, currentUser.id)
            .then(()=> {
                history.push(`/users/${currentUser.username}/created`);
            })
            .then(() => {
                closeModal()
            });
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        openModal("edit pin", 
        {
            pin: pin, 
        })
        closeModal()
    }

    return (
        <div className='delete-board-modal-container'>
            <div>
                <h1>Are you sure?</h1>
                <p>Once you delete a board, you can't undo it!</p>
            </div>
            <div className="delete-board-options">
                <div onClick={handleCancelClick} className='cancel-delete-board'>
                    <h3>Cancel</h3>
                </div>
                <div onClick={handleDeleteClick}className='delete-board-button'>
                    <h3>Delete</h3>
                </div>
            </div>
        </div>
    )
}

const mSTP = ({session, entities: {users}, ui: {modal: {props}}}) => {
    return {
        currentUser: users[session.id], 
        pin: props.pin
    }
}

const mDTP = dispatch => {
    return {
        deletePin: (pinId, userId) => dispatch(deletePin(pinId, userId)),
        closeModal: () => dispatch(closeModal()), 
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(DeleteBoardForm)