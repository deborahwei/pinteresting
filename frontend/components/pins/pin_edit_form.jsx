import React, {useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeModal, openModal } from "../../actions/modal_actions";
import { updatePin } from "../../actions/pin_actions";

const PinEditForm = (props) => {

    const { updatePin, closeModal, openModal, currentUser, pin, boards} = props 
    const [board, setBoard] = useState(null)
    const userBoards = currentUser.boards.map( (boardId) => boards[boardId])
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
    }

    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            openModal(formType, props)
        }
    }

    const handleSelection = (e) => {
        let value = e.target.value;
        setBoard(value)
    }

    console.log(pin.imageUrl)

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
                                {/* <label htmlFor="pin-edit-board">Title</label>
                                <select
                                    id="pin-edit-board" 
                                    defaultValue={board}
                                    onChange={handleSelection}
                                >
                                    {userBoards.map((userBoard, i) => <option key={i} value="board">{userBoard}</option>)}
                                </select>  */}
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
                        <img src={`${pin.imageUrl}`} alt="" />
                        <div className="div-image" style={{ backgroundImage: `url(${pin.imageUrl}`}}></div>
                    </div>
                </div>
                <div className="edit-form-buttons">
                    <div className={`button delete`}>
                    </div>
                    <div className={`button cancel`}>
                    </div>
                    <button type="submit" className={`button save`}>
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
        pin: props.pin, 
        board: props.board
    }
}

const mDTP = (dispatch) => {
    return {
        updatePin: (pin) => dispatch(updatePin(pin)), 
        closeModal: () => dispatch(closeModal()), 
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(PinEditForm) 