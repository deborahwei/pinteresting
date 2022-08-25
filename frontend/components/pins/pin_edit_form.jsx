import React, {useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeModal, openModal } from "../../actions/modal_actions";
import { removePin, updatePin } from "../../actions/pin_actions";
import { addPinToBoard } from '../../actions/board_pins_actions'

const PinEditForm = (props) => {

    const { updatePin, closeModal, openModal, addPinToBoard, currentUser, pin, boards} = props 
    const userBoards = currentUser.boards.map( (boardId) => boards[boardId])
    const [boardSelected, setBoardSelected] = useState(userBoards[0].name)
    const history = useHistory()

    const [state, setState] = useState({
        title: pin.title, 
        description: pin.description ?? "", 
        id: pin.id
    })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePin(state)
            .then(()=> {
                history.push(`/pins/${pin.id}`);
            })
            .then(() => {
                props.closeModal()
            })
            .then(() => {
                addPinToBoard(boardSelected, pin.id)
            })

    }

    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            openModal(formType, props)
        }
    }

    const handleSelection = (e) => {
        let value = e.target.value;
        setBoardSelected(value)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        closeModal()
    }

    return (
        <div className="pin-edit-form-container">
            <div className="pin-edit-heading">
                <h1>Edit this pin</h1>
            </div>
            <form className="form-form-container" onSubmit={handleSubmit} action="">
                <div className="pin-edit-form">
                    <div className="pin-edit-left">
                        <div className="pin-edit-inputs">
                            <div className="pin-edit-board">
                                <label htmlFor="pin-edit-board">Board</label>
                                <select
                                    id="pin-edit-board" 
                                    onChange={handleSelection}
                                >
                                    {userBoards.map((userBoard, i) => <option key={i} value={`${userBoard.id}`}>{userBoard.name}</option>)}
                                </select> 
                            </div>
                            <div className="pin-edit-title">
                                <label htmlFor="pin-edit-title">Title</label>
                                    <input 
                                    id="pin-edit-title" 
                                    type="text" 
                                    value={state.title}
                                    onChange={update('title')}
                                    />
                            </div>
                            <div className="pin-edit-description">
                                <label htmlFor="pin-edit-description">Description</label>
                                    <input 
                                    id="pin-edit-description" 
                                    type="text" 
                                    value={state.description}
                                    onChange={update('description')}
                                    />  
                            </div>
                        </div>
                    </div>
                    <div className="pin-edit-photo">
                        <div className="div-image" style={{ backgroundImage: `url(${pin.imageUrl}`}}/>
                    </div>
                </div>
                <div className="edit-form-buttons">
                    <div onClick={handleOpenModal('delete pin', {
                        pin: pin
                    })} 
                    className={`button-delete`}>
                        <h1>Delete</h1>
                    </div>
                    <div onClick={handleCancel} className={`button-cancel`}>
                        <h1>Cancel</h1>
                    </div>
                    <button type="submit" className={`button-save`}>
                        <h1>Save</h1>
                    </button>
                </div>
            </form>
        </div>
    )
}

const mSTP = ({session, entities: {users, boards}, ui: {modal: {props}}}) => {
    return {
        currentUser: users[session.id], 
        boards, 
        pin: props.pin
    }
}

const mDTP = (dispatch) => {
    return {
        addPinToBoard: (boardId, pinId) => dispatch(addPinToBoard(boardId, pinId)),
        updatePin: (pin) => dispatch(updatePin(pin)), 
        closeModal: () => dispatch(closeModal()), 
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(PinEditForm) 