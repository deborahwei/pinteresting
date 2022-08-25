import React from 'react'
import { connect } from 'react-redux'

const PinCommentContainer = (props) => {
    const [loading, setLoading] = useState(true)
}

const mSTP = ({session, entities: { users, pins, boards }}, props) => {
    return {
        currentUser: users[session.id], 
        pins, 
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchBoards: (userId) => dispatch(fetchBoards(userId)), 
        fetchUser: (userId) => dispatch(fetchUser(userId)), 
        openModal: (formType, props) => dispatch(openModal(formType, props)), 
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mSTP, mDTP)(PinCommentContainer)