import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import { Link } from 'react-router-dom'
import PinsIndex from '../pins/pins_index'
import { fetchPins } from '../../actions/pin_actions'

const UserShowCreatedContainer = (props) => {

    const { fetchPins, pins, currentUser, isUser} = props
    const [loading, setLoading] = useState(true) 
    
    useEffect( () => {
        fetchPins(currentUser.created_pins).finally(() => (setLoading(false)))
    }, [])
    
    const hasNoPins = currentUser.created_pins.length === 0
    const createdPins = currentUser.created_pins.map((pinId) => pins[pinId])
    
    const noSavedPinsMessage = () => {
        return isUser 
            ? "Inspire with an Idea Pin" 
            : "No Idea Pins yet, but there's a ton of potential"
    }

    const noPins = () => {
        return (
            <div className="no-created-container">
                <h1>{noSavedPinsMessage()}</h1>
                <Link to="/">
                    <div className={`idea-pin-button ${isUser ? "" : "hide"}`}>
                        <h1>Create</h1>
                    </div>
                </Link>
            </div>
        )
    }

    const createdPinsIndex = () => {
        return (
            <div className='created-pins-container'>
                <PinsIndex pins={createdPins} showUser={false}/>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : hasNoPins ? noPins() : createdPinsIndex()
}

const mSTP = ({session, entities: {pins, users}}) => {
    return {
        pins, 
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchPins: (pinIds) => dispatch(fetchPins(pinIds))
    }
}

export default connect(mSTP, mDTP)(UserShowCreatedContainer)