import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import PinsIndex from '../pins/pins_index'
import { fetchHomepagePins } from '../../actions/pin_actions'
import { HOMEPAGE_NUM_PINS } from '../../util/constants_util'

const CategoryHomepage = (props) => {

    const { fetchHomepagePins, category, pins} = props
    const [loading, setLoading] = useState(true) 
    
    useEffect( () => {
        fetchHomepagePins(HOMEPAGE_NUM_PINS).finally(() => (setLoading(false)))
    }, [])

    console.log(pins[306]?.tag, category, )

    const categorizedPins = Object.keys(pins).filter((pinId) => pins[pinId]?.tag === category)

    const content = () => {
        return (
            <div className='homepage-container'>
                <PinsIndex pins={categorizedPins} showUser={true}/>
            </div>
        )
    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({entities: {pins}}, props) => {
    return {
        pins,
        category: props.match.params.category
    }
}

const mDTP = dispatch => {
    return {
        fetchHomepagePins: (numPins) => dispatch(fetchHomepagePins(numPins))
    }
}

export default connect(mSTP, mDTP)(CategoryHomepage)