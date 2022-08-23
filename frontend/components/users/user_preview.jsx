import React from 'react'
import ProfilePicture from './profile_picture'

const UserPreviewContainer = (props) => {
    
    const {user} = props
    
    return (
        <div className='user-preview-container'>
            <ProfilePicture hasPhoto={false} user={user} isPreview={true}/>
            <h1>{user.username}</h1>
        </div>
    )
}

export default UserPreviewContainer