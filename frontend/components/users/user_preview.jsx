import React from 'react'
import ProfilePicture from './profile_picture'
import { Link } from 'react-router-dom'

const UserPreviewContainer = (props) => {
    
    const {user, bold=false} = props
    
    return (
        <Link to={`/users/${user?.username}/`}>
            <div className='user-preview-container'>
                <ProfilePicture user={user} />
                <h1 className={`username ${bold ? "bold" : " "}`}>{user?.username}</h1>
            </div>
        </Link>
    )
}

export default UserPreviewContainer