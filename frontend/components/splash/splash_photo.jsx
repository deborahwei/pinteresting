import React from 'react'

const SplashPhoto = (props) => {

    const {photoUrl, photoId, showPhoto, leavingPhoto} = props
    return (
        <div className={`splash-individual-photo`}>
            <img className={`splash-photo-${photoId} ${showPhoto ? "show-photo" : "leaving-photo"}`} src={photoUrl} alt="" />
        </div>
    )

}


export default SplashPhoto