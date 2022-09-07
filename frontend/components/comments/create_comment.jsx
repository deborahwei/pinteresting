import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { createComment, deleteComment } from '../../actions/comment_actions'
import ProfilePicture from '../users/profile_picture'

const CreateCommentContainer = ({createComment, endDiv, currentUser, pin}) => {
    
    const [state, setState] = useState({
        text: ""
    })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }
    
    const handleCreate = (e) => {
        createComment(pin.id, state.text)
        setState({text:''})
    }

    const createContainer = () => {
        return (
            <div className='create-comment'>
                <ProfilePicture user={currentUser}/>
                <input 
                    value={state.text}
                    onChange={update('text')}
                    type="text" 
                />
                <div onClick={handleCreate} className={`${state.text === "" ? "not-clickable" : ""} button-save`}>
                    <h1>Done</h1>
                </div>
            </div>
        )
    }

    return createContainer()
}

const mSTP = ({session, entities: { users}}) => {
    return {
        currentUser: users[session.id], 
    }

}

const mDTP = dispatch => {
    return {
        createComment: (pinId, text) => dispatch(createComment(pinId, text)),
        deleteComment: (pinId, commentId) => dispatch(deleteComment(pinId, commentId))
    }
}

export default connect(mSTP, mDTP)(CreateCommentContainer)