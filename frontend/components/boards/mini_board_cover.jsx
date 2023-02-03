import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchPin } from '../../actions/pin_actions'

const MiniBoardCover = ({pinId, pins, fetchPin}) => {

    if (!pinId) return null

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        fetchPin(pinId).finally(() => setLoading(false))
    }, [])

    const coverPin = pins[pinId]

    const content = () => {  
        return(
            <div className="mini-board-cover"> 
                    <div className='mini-board div-image' style={{ backgroundImage: `url(\"${coverPin?.imageUrl}\")`}}/>
            </div>
        )
    }

    return loading ? "" : content()
}



const mSTP = ({entities: {pins}}) => {
    return {
        pins
    }
}

const mDTP = (dispatch) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId))
    }
}

export default connect(mSTP, mDTP)(MiniBoardCover)