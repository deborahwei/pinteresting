import React from 'react'
import UserPreviewContainer from '../users/user_preview'
import { timeSince } from '../../util/time_util'

const CommentContainer = (props) => {
    
    const {comment, user} = props
    
    return (
        <div className="comment-item">
            <div className='comment-user'>
                <UserPreviewContainer user={user}/>
            </div>
            <div className='comment-text'>
                <p>{comment.text}</p>
            </div>
            <div className=''>
                {timeSince(comment.updated_at)}
            </div>
        </div>
    )
}

export default CommentContainer