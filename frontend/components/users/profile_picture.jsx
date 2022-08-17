import React from 'react'

const ProfilePicture = (props) => {

    const { currentUser, hasPhoto} = props

    const defaultPhoto = () => {
        return (
            <div className="avatar-container">
            
            </div>
        )
    }

    const uploadedPhoto = () => {
        <img className="demo-user-pic" src={window.demoUserUrl} />
    }

    return hasPhoto ? uploadedPhoto() : defaultPhoto();

}


export default ProfilePicture