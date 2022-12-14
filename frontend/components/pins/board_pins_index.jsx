import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import { connect } from 'react-redux'
import { BREAKPOINTS } from '../../util/constants_util'
import PinPhotoContainer from './pin_item'
import { fetchUsers } from '../../actions/user_actions'
import LoadingContainer from '../generic/loading'
import { fetchBoards } from '../../actions/board_actions'
import { getNumOfCols } from '../../util/function_util'

const BoardPinsIndexContainer = ({pins, currentUser, users, fetchUsers, fetchBoards, board}) => {

    const [loading, setLoading] = useState(true)
    useEffect( () => {
        fetchBoards(currentUser.id).then(() => fetchUsers(pins, users)).finally(() => setLoading(false))
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
                                                        board={board}
                                                        key={i}
                                                        pin={pin}
                                                        creator={findPinCreator(pin)}
                                                        lastPin={(i + 1) % getNumOfCols() === 0}
                                                        />)
                    }
                </Masonry>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: {users}}) => {
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

export default connect(mSTP, mDTP)(BoardPinsIndexContainer)