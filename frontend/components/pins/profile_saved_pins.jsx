import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import { fetchPins } from '../../actions/pin_actions'
import PinsIndex from '../pins/pins_index'

const ProfilePinsContainer = (props) => {
    const { fetchPins, pins, user } = props
    
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        if (user.saved_pins.length > 0) {
            fetchPins(user.saved_pins).finally(() => (setLoading(false)))
        }
        else {
            setLoading(false)
        }
    }, [])

    const profilePins = user.saved_pins.map((pinId) => pins[pinId])
    
    const content = () => {
        return (
            <div className='profile-pins-container'>
                <PinsIndex pins={profilePins} center={true} showDropdown={false}/>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({entities: {pins}}) => {
    return {
        pins 
    }
}

const mDTP = dispatch => {
    return {
        fetchPins: (pinIds) => dispatch(fetchPins(pinIds))
    }
}

export default connect(mSTP, mDTP)(ProfilePinsContainer)