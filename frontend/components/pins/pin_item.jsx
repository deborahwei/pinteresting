import React from 'react'

const PinPhotoContainer = ({pin}) => {

    return (
        <div>
            <img src={pin.imageUrl}></img>
        </div>
    )

}


export default PinPhotoContainer