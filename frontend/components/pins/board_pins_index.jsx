import React from 'react'
import Masonry from 'react-masonry-css'
import { BREAKPOINTS } from '../../util/constants_util'
import PinPhotoContainer from './pin_item'

const BoardPinsIndexContainer = ({pins}) => {
    if (pins.length === 0) return null
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

export default BoardPinsIndexContainer