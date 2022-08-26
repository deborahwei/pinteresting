import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import PinsIndex from '../pins/pins_index'
import { fetchHomepagePins } from '../../actions/pin_actions'
import { HOMEPAGE_NUM_PINS } from '../../util/constants_util'
import { shuffleArray } from '../../util/function_util'
import InfiniteScroll from 'react-infinite-scroll-component'

const HomepageContainer = (props) => {

    const { fetchHomepagePins, pins} = props
    const [loading, setLoading] = useState(true) 
    
    useEffect( () => {
        fetchHomepagePins(HOMEPAGE_NUM_PINS).finally(() => (setLoading(false)))
    }, [])

    // const homepagePins = Object.keys(pins).map((pinId) => pins[pinId])
    const homepagePins = shuffleArray(Object.keys(pins).map((pinId) => pins[pinId]))

    const content = () => {
        return (
            <div className='homepage-container'>
                <PinsIndex pins={homepagePins} showUser={true}/>
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
        fetchHomepagePins: (numPins) => dispatch(fetchHomepagePins(numPins))
    }
}

export default connect(mSTP, mDTP)(HomepageContainer)