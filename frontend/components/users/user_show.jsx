import React from 'react'
import ProfilePicture from './profile_picture'
import { connect, Connect } from 'react-redux'

const UserShowContainer = (props) => {

    return (
        <div className="user-show-container">
           HELLO
            {/* <div className="user-show-header">
                <div className="user-show-profile-pic">
                    <ProfilePicture currentUser={currentUser} hasPhoto={false}/>
                </div>
            </div> */}
        </div>
    )

}

const mSTP = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id],
    }
}

const mDTP = dispatch => {

}

export default UserShowContainer

// export default connect(mSTP, mDTP)(UserShowContainer)