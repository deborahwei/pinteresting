import React, { useRef }  from 'react'
import ProfilePicture from './profile_picture'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { closeDropdown } from '../dropdown/close_dropdown'

const UserShowContainer = (props) => {

    // const userId = props.match.params.userId 
    const { currentUser } = props

    const plusRef = useRef(null)
    const [plus, setPlus] = closeDropdown(plusRef, false)
    const handlePlusClick = () => {
        setPlus(!plus)
    }

    return (
        <div className="user-show-container">
            <div className="user-show-header">
                <div className="user-show-profile-pic">
                    <ProfilePicture currentUser={currentUser} hasPhoto={false}/>
                </div>
                <h1 >{currentUser.username}</h1>
                <p>{`@${currentUser.username}`}</p>
            </div>
            <div className="user-show-content-container">
                <div className="user-show-content-labels">
                    <NavLink to={`/users/${currentUser.username}/created`} activeClassName="tab-clicked">
                        <h1>Created</h1>
                    </NavLink>
                    <NavLink to={`/users/${currentUser.username}/saved`} activeClassName="tab-clicked">
                        <h1>Saved</h1>
                    </NavLink>
                </div>
                <div className="user-show-plus-container">
                    <div className={`plus-circle-${ plus ? "clicked" : "unclicked"}`}></div>
                        <i ref={plusRef} onClick={handlePlusClick} className={`fa-solid fa-plus fa-2xs plus-${ plus ? "clicked" : "unclicked"}`}></i>
                    <div className={`plus-menu ${ plus ? "open" : "closed"}`}>
                        <p>Create</p>
                        <div>Create pin</div>
                        <div>Create board</div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )

}

const mSTP = (state, props) => {
    const userId = props.match.params.userId // gets userId from route path

    return {
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.id],
    }
}

// const mDTP = dispatch => {
//     const userId = props.match.params.userId // gets userId from route path

//     return {
//         fetchUser: (userId) => dispatch(fetchUser(userId))
//     }
// }

export default connect(mSTP, null)(UserShowContainer)

// export default connect(mSTP, mDTP)(UserShowContainer)