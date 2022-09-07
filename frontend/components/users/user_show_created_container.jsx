import React, { useRef, useState, useEffect }  from 'react'
import ProfilePicture from './profile_picture'
import { connect } from 'react-redux'
import { NavLink, Link, Redirect } from 'react-router-dom'
import { closeDropdown } from '../dropdown/close_dropdown'
import { openModal } from '../../actions/modal_actions'
import { fetchUserByUsername} from '../../actions/user_actions'
import { reverseSearch } from '../../util/function_util'
import LoadingContainer from '../generic/loading'
import UserShowCreatedContainer from './user_show_created'
import UserShowSavedContainer from './user_show_saved'

const UserShowContainer = (props) => {    
    const { currentUser, fetchUserByUsername, username, user, openModal} = props   
    
    const [loading, setLoading] = useState(!user)
    const isUser = currentUser === user
    
    const childrenContainers = { // clean this up
        "saved": <UserShowSavedContainer
        user={user} 
        isUser={isUser}
        />,
        "created": <UserShowCreatedContainer
        user={user} 
        isUser={isUser}
        />,
    }
    useEffect(() => {
        if (!user) {
            fetchUserByUsername(username)
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [])



    const plusRef = useRef(null)
    const [plus, setPlus] = closeDropdown(plusRef, false)
    const handlePlusClick = () => {
        setPlus(!plus)
    }

    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            openModal(formType, props)
        }
    }

    const content = () => (
        <div className="user-show-container">
            <div className="user-show-header">
                <div className="user-show-profile-pic">
                    <ProfilePicture user={user} big={true} />
                </div>
                <h1 >{username}</h1>
                <p>{`@${username}`}</p>
                <div className="user-show-content-labels">
                    <NavLink 
                        to={`/users/${username}/created`} 
                        >
                        <h1 className="tab-clicked">Created</h1>
                    </NavLink>
                    <NavLink 
                        to={`/users/${username}/saved`} 
                        >
                        <h1>Saved</h1>
                    </NavLink>
                </div>
                <div className={`user-show-plus-container ${!isUser ? "hide" : ""}`}>
                    <div className={`plus-circle-${ plus ? "clicked" : "unclicked"}`}></div>
                        <i ref={plusRef} onClick={handlePlusClick} className={`fa-solid fa-plus fa-2xs plus-${ plus ? "clicked" : "unclicked"}`}></i>
                    <div className={`plus-menu ${ plus ? "open" : "closed"}`}>
                        <p>Create</p>
                        <Link to="/pin-builder">
                            <div>Create pin</div>   
                        </Link>
                        <div onClick={handleOpenModal('create board', {boardShow: false} )}>Create board</div>
                    </div>
                </div>
            </div>
            <div className="user-show-content-container">
                {childrenContainers["created"]}
            </div>
        </div>
    )

    if (loading) {
        return <LoadingContainer/> 
    }
    else {
        if (!!user) {
            return content()
        }
        else {
            fetchUserByUsername(username)
                .finally(() => {
                    setLoading(false);
                    <Redirect to="/"/>
                })
        }
    }
     
}

const mSTP = ({session, entities: {users}}, props) => {
    return {
        username: props.match.params.username,
        user: reverseSearch(users, "username", props.match.params.username),
        currentUser: users[session.id],
    }
}


const mDTP = dispatch => {
    return {
        fetchUserByUsername: (username) => dispatch(fetchUserByUsername(username)),
        openModal: (formType, props) => dispatch(openModal(formType, props)),
        fetchUserBoardsByUsername: (username) => dispatch(fetchUserBoardsByUsername(username))
    }
}

export default connect(mSTP, mDTP)(UserShowContainer)
