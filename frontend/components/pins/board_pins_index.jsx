import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import { connect } from 'react-redux'
import { BREAKPOINTS } from '../../util/constants_util'
import PinPhotoContainer from './pin_item'
import { fetchUsers } from '../../actions/user_actions'
import LoadingContainer from '../generic/loading'

const BoardPinsIndexContainer = ({pins, users, fetchUsers, boardName}) => {
  
    const [loading, setLoading] = useState(true)
    useEffect( () => {
        fetchUsers(pins, users).finally(() => setLoading(false))
    }, [])

    const findPinCreator = (pin) => {
        return users[pin.creator]
    }
        
    const content = () => {
        return (
            <div className='board-pins-index-container'>
                <Masonry
                    className={`masonry-pins-grid`}
                    breakpointCols={BREAKPOINTS}
                    columnClassName="masonry-pins-column"
                >   
                    {
                        pins.map( (pin, i) => <PinPhotoContainer 
                                                        key={i} 
                                                        boardName={boardName}
                                                        pin={pin} 
                                                        creator={findPinCreator(pin)}/>)
                    }
                </Masonry>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

export const mSTP = ({entities: {users}}) => {
    return {
        users
    }
}

export const mDTP = (dispatch) => {
    return {
        fetchUsers: (users, pins) => dispatch(fetchUsers(users, pins))
    }
}

export default connect(mSTP, mDTP)(BoardPinsIndexContainer)