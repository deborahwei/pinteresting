import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
// have this container fetch all the comments
const PinCommentContainer = (props) => {

    const [loading, setLoading] = useState(true)

    return (
        <div>

        </div>
    )
}

const mSTP = ({session, entities: { users }}, props) => {
    return {
        pinId: props.match.params.pinId,
        currentUser: users[session.id], 
    }
}

const mDTP = dispatch => {

}

export default connect(mSTP, null)(PinCommentContainer)