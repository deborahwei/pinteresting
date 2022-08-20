import React, {useState} from 'react'
import { updateBoard } from '../../actions/board_actions'
import { connect } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchBoardByName } from '../../actions/board_actions'
import LoadingContainer from '../generic/loading'
import { reverseSearch } from '../../util/function_util'

const EditBoardForm = (props) => {

    const { updateBoard, errors, currentUser, fetchBoardByName, board, openModal, modalProps } = props

    const [boardLoading, setBoardLoading] = useState(!board)
    const history = useHistory()


    if (!board) {
        fetchBoardByName(currentUser.id, board.name)
            .finally(() => {
                setBoardLoading(false)
            })
    }

    const [state, setState] = useState({
        name: board.name, 
        description: board.description ?? "", 
        id: board.id
      })



    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBoard(state)
            .then(()=> {
                history.push(`${modalProps.path}`);
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

    const renderErrors = () => {
        return (
          <ul>
            {errors.map((error, i) => (
              <li key={`error-${i}`} className="board-errors auth-errors">
                {error}
              </li>
            ))}
          </ul>
        );
    }

    const content = () => (
        <div className='edit-board-container'>
            <div>
                <h1>Edit your board</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='create-board-input-container'>
                    <label htmlFor="modal-board-name">Name</label>
                    <input 
                    id="modal-board-name" 
                    type="text" 
                    value={state.name}
                    onChange={update('name')}
                    />
                </div>
                { renderErrors() }
                <div className='create-board-description-container'>
                    <label htmlFor="modal-board-description">Description</label>
                    <input 
                    id="modal-board-description" 
                    type="text" 
                    value={state.description}
                    placeholder="What's your board about?"
                    onChange={update('description')}
                    />
                </div>
                <div className='delete-board-container'>
                    <h3>Action</h3>
                    <div onClick={handleOpenModal('delete board', {board, currentUser})} className='delete-board'>
                        <h1>Delete board</h1>
                        <p>Delete this board and all its Pins forever. You can't undo this!</p>
                    </div>
                </div>
                <button  type='submit' className={`${state.name != "" ? "clickable" : ""} board-create-button`}>
                    <h1>Done</h1>
                </button>
            </form>
        </div>
    )

    if (boardLoading) {
        return <LoadingContainer/> 
    }
    else {
        if (!!board) {
            return content()
        }
        else {
            fetchBoardByName(currentUser.id, board.name).catch(()=>{}).finally(() => {
                setLoading(false);
                <Redirect to="/"/>
            })
        }
    }

}

const mSTP = ({errors, session, entities: {users, boards}, ui: {modal}}) => {
    return {
        board: reverseSearch(boards, "name", modal.props.boardName),
        errors: errors.board,
        currentUser: users[session.id], 
        modalProps: modal.props

    }
}

const mDTP = dispatch => {
    return {
        updateBoard: (board) => dispatch(updateBoard(board)), 
        openModal: (formType, props) => dispatch(openModal(formType, props)),
        closeModal: () => dispatch(closeModal()), 
        fetchBoardByName: (userId, boardName) => dispatch(fetchBoardByName(userId, boardName))
    }
}

export default connect(mSTP, mDTP)(EditBoardForm)