import React from 'react'
import { Link } from 'react-router-dom'
import { MAX_TITLE_CHAR } from '../../util/constants_util'
import UserPreviewContainer from '../users/user_preview'

const PinPhotoContainer = ({pin, creator }) => {

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
            <Link to={`/pins/${pin.id}`}className="pin-show-link">
                <img src={pin.imageUrl}>     
                </img>
                <div className="pin-item-hover">
                    <div className="pin-item-board-modal">

                    </div>
                </div>
            </Link>
            <div className='pin-item-info'>
                <div className='pin-item-title'>
                    {shortenedPinTitle()}
                </div>
                <div className='pin-item-user'>
                    <UserPreviewContainer user={creator}/>
                </div>
            </div>
        </div>
    )

}

export default PinPhotoContainer