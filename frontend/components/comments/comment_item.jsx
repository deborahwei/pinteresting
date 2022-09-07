import React, {useRef, useState} from 'react'
import UserPreviewContainer from '../users/user_preview'
import { connect } from 'react-redux'
import { timeSince } from '../../util/time_util'
import {closeDropdown} from '../dropdown/close_dropdown'
import { deleteComment, updateComment } from '../../actions/comment_actions'


const CommentContainer = (props) => {
    
    const {comment, user, pin, isAuthor, deleteComment, updateComment} = props

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const [edit, setEdit] = useState(false)

    const handleDelete = () => {
        deleteComment(pin.id, comment.id)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            updateComment(pin.id, comment.id, state)
                .then(() => setEdit(false))
        }
    }

    const [state, setState] = useState({
        text: comment.text
    })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    return (
        <div className="comment-item">
            <div className='comment-item-content'>
                <div className='comment-user'>
                    <UserPreviewContainer user={user} bold={true}/>
                </div>
                <div className='comment-text'>
                    <p className={edit ? "hide" : ""}>{comment.text}</p>
                    <input onChange={update('text')} onKeyPress={handleSubmit} className={edit ? "" : "hide"} type="text" defaultValue={comment.text}/>
                </div>
            </div>
            <div className='comment-extras'>
                <div className={`options-comments-menu ${ open ? "open" : "closed"}`}>
                    <div onClick={handleDelete} className="edit-comment-option">Delete</div>
                    <div onClick={handleEdit} className="edit-comment-option">Edit</div>
                </div>
                <div className='updated-at'>
                    {timeSince(comment.created_at)}
                </div>
                <div className={`${isAuthor ? "" : "hide"} dots`} ref={openRef} >
                    <p onClick={handleClick} >
                        ...
                    </p>
                </div>
            </div>
        </div>
    )
}

const mDTP = (dispatch) => {
    return {
        deleteComment: (pinId, commentId) => dispatch(deleteComment(pinId, commentId)),
        updateComment: (pinId, commentId, comment) => dispatch(updateComment(pinId, commentId, comment))
    }
}

export default connect(null, mDTP)(CommentContainer)