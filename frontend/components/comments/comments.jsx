import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import { fetchCommentUsers } from '../../actions/user_actions'
import { createComment, deleteComment } from '../../actions/comment_actions'
import CommentContainer from './comment_item'
import ProfilePicture from '../users/profile_picture'

const PinCommentContainer = (props) => {
    
    const [loading, setLoading] = useState(true)
    const {fetchCommentUsers, currentUser, createComment, deleteComment, pin, users} = props
    
    if (!pin?.comments) return null

    const comments = Object.keys(pin.comments).map((commentId) => pin.comments[commentId])
    console.log("comments", comments)

    const getAuthors = () => {
        const allAuthors = comments.map((comment) => comment.user_id)
        const filteredAuthors = [...new Set(allAuthors)]
        const authorsArr = Array.from(filteredAuthors)
        return authorsArr
    }

    useEffect( () => {
        fetchCommentUsers(getAuthors()).finally(()=> setLoading(false))
    }, [])

    const commentHeading = () => {
        if(comments.length > 0) {
            return `${comments.length} comments`
        }
        else if (comments.length === 1) {
            return "1 comment"
        }
        else {
            return "Comments"
        }
    }

    const content = () => {
        console.log()
        return(
            <div className='comments-container'>
                <div className='comments-heading'>
                    <h1>{commentHeading()}</h1>
                    <i className="fa-solid fa-chevron-down fa-sm"></i>
                </div>
                <div className='comments-content'>
                    {
                        comments.map((comment, i) => <CommentContainer key={i} user={users[comment.user_id]} comment={comment}/>)
                    }
                </div>
                <div className='create-comment'>
                    <ProfilePicture user={currentUser}/>
                    <input type="text" />
                </div>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: { users, pins}}) => {
    return {
        currentUser: users[session.id], 
        pins, 
        users
    }

}

const mDTP = dispatch => {
    return {
        fetchCommentUsers: (users, pins) => dispatch(fetchCommentUsers(users, pins)), 
        createComment: (pinId, text) => dispatch(createComment(pinId, text)),
        deleteComment: (pinId, commentId) => dispatch(deleteComment(pinId, commentId))
    }
}


export default connect(mSTP, mDTP)(PinCommentContainer)