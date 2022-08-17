import React from 'react'

const ProfilePicture = (props) => {

    const { currentUser, hasPhoto} = props

    const defaultPhoto = () => {
        return (
            <div className="default-picture">
                {currentUser.username[0].toUpperCase()}
            </div>  
        )
    }

    const uploadedPhoto = () => {
        <img className="demo-user-pic" src={window.demoUserUrl} />
    }

    return hasPhoto ? uploadedPhoto() : defaultPhoto();

}


export default ProfilePicture