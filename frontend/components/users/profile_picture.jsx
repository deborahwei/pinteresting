import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePicture = (props) => {

    const { user, hasPhoto, isPreview} = props

    const defaultPhoto = () => {
        return (
            <div className="default-picture">
                {user.username[0].toUpperCase()}
            </div>  
        )
    }

    const uploadedPhoto = () => {
        return <img className="demo-user-pic" src={window.demoUserUrl} />
    }

    const photoPreview = () => {
        return (
            <div className='user-preview-pic'>
                    <div className="preview-photo">
                        <h1 className='preview-photo-letter'>{user.username[0].toUpperCase()}</h1>
                    </div>  
            </div>
        )
    }

    return hasPhoto ? uploadedPhoto() : isPreview ? photoPreview() : defaultPhoto();


}


export default ProfilePicture