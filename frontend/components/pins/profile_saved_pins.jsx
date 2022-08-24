import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import { fetchPins } from '../../actions/pin_actions'
import PinsIndex from '../pins/pins_index'

const ProfilePinsContainer = (props) => {

    const { fetchPins, pins, currentUser } = props
    
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        fetchPins(currentUser.saved_pins).finally(() => (setLoading(false)))
    }, [])

    const profilePins = currentUser.saved_pins.map((pinId) => pins[pinId])
    
    const content = () => {
        return (
            <div className='profile-pins-container'>
                <PinsIndex pins={profilePins} center={true} showDropdown={false}/>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
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

export default connect(mSTP, mDTP)(ProfilePinsContainer)