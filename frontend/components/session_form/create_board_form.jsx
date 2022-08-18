import React, {useState} from 'react'
import { createBoard } from '../../actions/board_actions'
import { connect } from 'react-redux'

const CreateBoardForm = (props) => {

    const { createBoard, errors} = props
  
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
        createBoard(state)
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
                <div className="create-board-footer">
                    <button className={`${state.name != "" ? "clickable" : ""} board-create-button`}type='submit'>
                        <h1>Create</h1>
                    </button>
                </div>
            </form>
        </div>
    )
}

const mSTP = ({errors}) => {
    return {
        errors: errors.board
    }
}

const mDTP = dispatch => {
    return {
        createBoard: (board) => dispatch(createBoard(board))
    }
}

export default connect(mSTP, mDTP)(CreateBoardForm)