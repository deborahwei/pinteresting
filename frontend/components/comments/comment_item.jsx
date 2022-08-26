import React, {useRef} from 'react'
import UserPreviewContainer from '../users/user_preview'
import { connect } from 'react-redux'
import { timeSince } from '../../util/time_util'
import {closeDropdown} from '../dropdown/close_dropdown'
import { deleteComment } from '../../actions/comment_actions'


const CommentContainer = (props) => {
    
    const {comment, user, pin, isAuthor, deleteComment} = props

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const handleDelete = () => {
        deleteComment(pin.id, comment.id)
    }

    return (
        <div className="comment-item">
            <div className='comment-item-content'>
                <div className='comment-user'>
                    <UserPreviewContainer user={user} bold={true}/>
                </div>
                <div className='comment-text'>
                    <p>{comment.text}</p>
                </div>
            </div>
            <div className='comment-extras'>
                <div className={`options-comments-menu ${ open ? "open" : "closed"}`}>
                    <div onClick={handleDelete} className="edit-comment-option">Delete</div>
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
        deleteComment: (pinId, commentId) => dispatch(deleteComment(pinId, commentId))
    }
}

export default connect(null, mDTP)(CommentContainer)