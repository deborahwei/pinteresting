import React, {useEffect, useState} from 'react'
import Masonry from 'react-masonry-css'
import { connect } from 'react-redux'
import { BREAKPOINTS } from '../../util/constants_util'
import PinPhotoContainer from './pin_item'
import { fetchUsers } from '../../actions/user_actions'
import LoadingContainer from '../generic/loading'

const BoardPinsIndexContainer = ({pins, users, fetchUsers}) => {
  
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        fetchUsers(pins, users).finally(() => setLoading(false))
    }, [])
    console.log(pins, users)
        
    const content = () => {
        return (
            <div className='board-pins-index-container'>
                <Masonry
                    className={`masonry-pins-grid`}
                    breakpointCols={BREAKPOINTS}
                    columnClassName="masonry-pins-column"
                >   
                    {
                        pins.map( (pin, i) => <PinPhotoContainer key={i} pin={pin}/>)
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