import React from 'react'

const PinPhotoContainer = (props) => {

    const {photoUrl} = props

    return (
        <img className={`pin-photo`} src={photoUrl} alt="" />
    )

}


export default PinPhotoContainer