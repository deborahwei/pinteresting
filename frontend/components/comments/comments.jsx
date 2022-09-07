import React, {useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import { fetchCommentUsers } from '../../actions/user_actions'
import { createComment } from '../../actions/comment_actions'
import CommentContainer from './comment_item'
import CreateCommentContainer from './create_comment'

const PinCommentContainer = (props) => {

    const bottomRef = useRef(null)
    const [loading, setLoading] = useState(true)
    const {fetchCommentUsers, pin, currentUser, users} = props
    if (!pin?.comments) return null
    
    const comments = Object.keys(pin.comments).map((commentId) => pin.comments[commentId])

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

    useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior:'smooth'})
    }, [pin?.comments]);

    const content = () => {
        return(
            <div className='comments-container'>
                <div className='comments-heading'>
                    <h1>{commentHeading()}</h1>
                    <i className="fa-solid fa-chevron-down fa-sm"></i>
                </div>
                <div className='comments-content'>
                    {
                        comments.map((comment, i) => <CommentContainer 
                            key={i} 
                            pin={pin}
                            user={users[comment.user_id]} 
                            comment={comment}
                            isAuthor={currentUser.id === comment.user_id}
                        />)
                    }
                    <div ref={bottomRef}></div>
                </div>
                <CreateCommentContainer bottomRef={bottomRef} pin={pin}/>
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
        createComment: (pinId, text) => dispatch(createComment(pinId, text))
    }
}


export default connect(mSTP, mDTP)(PinCommentContainer)