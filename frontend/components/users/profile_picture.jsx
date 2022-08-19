import React from 'react'

const ProfilePicture = (props) => {

    const { user, hasPhoto} = props

    const defaultPhoto = () => {
        return (
            <div className="default-picture">
                {user.username[0].toUpperCase()}
            </div>  
        )
    }

    const uploadedPhoto = () => {
        <img className="demo-user-pic" src={window.demoUserUrl} />
    }

    return hasPhoto ? uploadedPhoto() : defaultPhoto();

}


export default ProfilePicture