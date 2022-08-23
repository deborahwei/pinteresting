import React, {useState} from 'react'
import { createBoard } from '../../actions/board_actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"; 
import { closeModal } from '../../actions/modal_actions';

const CreateBoardForm = (props) => {

    const {createBoard, errors, currentUser, boardShow} = props;
    const history = useHistory();
  
    const [state, setState] = useState({
        name: ''
      })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (boardShow) {
            createBoard(state).then( () => props.closeModal())
        }
        else {
            createBoard(state)
                .then(()=> {
                    history.push(`/users/${currentUser.username}/boards/${state.name}`);
                })
                    .then(() => {
                        props.closeModal()
                    })
        }
    }

    const renderErrors = () => {
        return(
          <ul>
            {errors.map((error, i) => (
              <li key={`error-${i}`} className="board-errors auth-errors">
                {error}
              </li>
            ))}
          </ul>
        );
    }

    return (
        <div className='create-board-container'>
            <div>
                <h1>Create board</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='create-board-input-container'>
                    <label htmlFor="modal-board-name">Name</label>
                    <input 
                    id="modal-board-name" 
                    type="text" 
                    value={state.name}
                    onChange={update('name')}
                    placeholder='Like "Places to Go" or "Recipes to Make"'
                    />
                </div>
                { renderErrors() }
                <button type="submit" className={`${state.name != "" ? "clickable" : ""} board-create-button`}>
                    <h1>Create</h1>
                </button>
            </form>
        </div>
    )
}

const mSTP = ({errors, entities: {users}, session, ui: {modal: {props}}}) => {
    return {
        errors: errors.board,
        currentUser: users[session.id],
        boardShow: props.boardShow
    }
}

const mDTP = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(CreateBoardForm)