import React from 'react'

const ProfilePicture = (props) => {

    const { user, big=false, medium=false, xs=false} = props

    const uploadedPhoto = () => {
        return (
            <div className="user-preview-pic">
                <div className={`div-image ${big ? "big" : medium ? "medium" : xs ? "xs" : ""}`} style={{ backgroundImage: `url(${user?.image_url}`}}/>
            </div>
        )
    }

    const photoPreview = () => {
        return (
            <div className='user-preview-pic'>
                    <div className={`preview-photo ${big ? "big" : medium ? "medium" : xs ? "xs" : ""}`}>
                        <h1 className={`preview-photo-letter  `}>{user?.username[0].toUpperCase()}</h1>
                    </div>  
            </div>
        )
    }

    return user?.image_url ? uploadedPhoto() : photoPreview();


}


export default ProfilePicture