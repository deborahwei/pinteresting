import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import { connect } from 'react-redux'
import { BREAKPOINTS } from '../../util/constants_util'
import PinPhotoContainer from './pin_item'
import { fetchUsers } from '../../actions/user_actions'
import LoadingContainer from '../generic/loading'
import { fetchBoards } from '../../actions/board_actions'

const PinsIndexContainer = ({pins, currentUser, users, fetchUsers, fetchBoards, showUser=true, showDropdown=true, center=false}) => {
    
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        fetchBoards(currentUser.id).then(() => fetchUsers(pins, users)).finally(() => setLoading(false))
    }, [])

    const findPinCreator = (pin) => {
        return users[pin.creator]
    }
        
    const content = () => {
        return (
            <div className='pins-index-container'>
                <Masonry
                    className={`masonry-pins-grid ${center ? "center" : ""}`}
                    breakpointCols={BREAKPOINTS}
                    columnClassName="masonry-pins-column"
                >   
                    {
                        pins.map( (pin, i) => <PinPhotoContainer 
                                                        key={i}
                                                        pin={pin}
                                                        showUser={showUser}
                                                        showDropdown={showDropdown}
                                                        creator={findPinCreator(pin)}/>)
                    }
                </Masonry>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: {users, pins}}) => {
    return {
        users, 
        currentUser: users[session.id]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        fetchUsers: (users, pins) => dispatch(fetchUsers(users, pins))
    }
}

export default connect(mSTP, mDTP)(PinsIndexContainer)