import React, { useState, useRef } from 'react'
import { NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import { reverseSearch } from '../../util/function_util'
import { fetchUserByUsername } from '../../actions/user_actions'
import LoadingContainer from '../generic/loading'
import ProfilePicture from '../users/profile_picture'
import { closeDropdown } from '../dropdown/close_dropdown'

const BoardShowContainer = (props) => {
   
    const { name, user, currentUser } = props 

    const [loading, setLoading] = useState(!user)
    if (!user) {
        fetchUserByUsername(user.username).catch(()=>{}).finally(() => {
            setLoading(false)
        })
    }

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const ownsBoard = currentUser.username === user.username
    
    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType)
        }
    }

    const content = () => (
        <div className='board-show-container'>
            <div className="board-show-header">
                <div className="board-show-name">
                    <h1>{name}</h1>
                    <div 
                        className={
                            `board${ownsBoard ? "-show" : "-hide"}-options options-${ open ? "clicked" : "unclicked"}
                        `}
                 
                        ref={openRef}
                    >
                        <p onClick={handleClick}>...</p>
                        <div className={`options-menu ${ open ? "open" : "closed"}`}>
                            <p>Board options</p>
                            <div onClick={openModal('edit board')} className="edit-board-option">Edit board</div>
                        </div>
                    </div>
                </div>
                <div className="board-show-owner">
                    <NavLink to={`/users/${user.username}/saved`}>
                        <div className='board-show-owner-profile'>
                            <ProfilePicture user={ownsBoard ? currentUser : user} hasPhoto={false}/>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="board-show-pins">

            </div>
        </div>
    )

    return loading ? <LoadingContainer/> : !!user ? content() : <Redirect to="/"/>
}

const mSTP = ({session, entities: {users}}, props) => {
    return {
        currentUser: users[session.id], 
        name: props.match.params.boardName, 
        user: reverseSearch(users, "username", props.match.params.username)
    }
}

const mDTP = dispatch => {
    return {
        fetchUserByUsername: (username) => dispatch(fetchUserByUsername(username)),
        openModal: (formType) => dispatch(openModal(formType)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(BoardShowContainer)