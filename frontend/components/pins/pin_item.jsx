import React from 'react'
import { Link } from 'react-router-dom'
import { MAX_TITLE_CHAR } from '../../util/constants_util'

const PinPhotoContainer = ({pin}) => {

    const shortenedPinTitle = () => {
        const splitPinTitle = pin.title.split("")
        if (splitPinTitle.length > MAX_TITLE_CHAR) {
            return splitPinTitle.splice(0, MAX_TITLE_CHAR).join("").concat("...")
        }
        else {
            return pin.title
        }
    }

    return (
        <div className='pin-item-container'>
            <Link>
                <img src={pin.imageUrl}></img>
            </Link>
            <div className='pin-item-info'>
                <div className='pin-item-title'>
                    {shortenedPinTitle()}
                </div>
                <div className='pin-item-user'>
                    Fabio
                </div>
            </div>
        </div>
    )

}

export default PinPhotoContainer