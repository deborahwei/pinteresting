import React from 'react'

const SplashPinContainer = (props) => {

    const {photoUrl} = props

    return (
        <img className={`pin-photo`} src={photoUrl} alt="" />
    )

}


export default SplashPinContainer