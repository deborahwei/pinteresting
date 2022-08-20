import React, { useRef, useState, useEffect }  from 'react'
import ProfilePicture from './profile_picture'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { closeDropdown } from '../dropdown/close_dropdown'
import { openModal } from '../../actions/modal_actions'
import { fetchUserByUsername} from '../../actions/user_actions'
import { reverseSearch } from '../../util/function_util'
import LoadingContainer from '../generic/loading'
import UserShowCreatedContainer from './user_show_created'
import UserShowSavedContainer from './user_show_saved'

const Tab = {
    SAVED: "saved",
    CREATED: "created"
}


const UserShowContainer = (props) => {
    
    const { currentUser, fetchUserByUsername, username, user, tabSelected} = props   
    
    const [loading, setLoading] = useState(!user)
    const isUser = currentUser === user
    const [tab, setTab] = useState(tabSelected)
    
    const handleClickTab = tab => e => {
        e.preventDefault
        setTab(tab)
    }
    
    const childrenContainers = {
        [Tab.SAVED]: <UserShowSavedContainer
        user={user} 
        isUser={isUser}
        />,
        [Tab.CREATED]: <UserShowCreatedContainer/>,
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

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType)
        }
    }

    const content = () => (
        <div className="user-show-container">
            <div className="user-show-header">
                <div className="user-show-profile-pic">
                    <ProfilePicture user={currentUser} hasPhoto={false}/>
                </div>
                <h1 >{username}</h1>
                <p>{`@${username}`}</p>
            </div>
            <div className="user-show-content-labels">
                <NavLink 
                    onClick={handleClickTab(Tab.CREATED)} 
                    to={`/users/${username}/created`} 
                    className = {`${tabSelected === "created" ? "tab-clicked" : "" }`}>
                    <h1>Created</h1>
                </NavLink>
                <NavLink 
                    onClick={handleClickTab(Tab.SAVED)} 
                    to={`/users/${username}/saved`} 
                    className = {`${tabSelected === "saved" ? "tab-clicked" : "" }`}>
                    <h1>Saved</h1>
                </NavLink>
            </div>
            <div className="user-show-content-container">
                <div className={`user-show-plus-container ${!isUser ? "hide" : ""}`}>
                    <div className={`plus-circle-${ plus ? "clicked" : "unclicked"}`}></div>
                        <i ref={plusRef} onClick={handlePlusClick} className={`fa-solid fa-plus fa-2xs plus-${ plus ? "clicked" : "unclicked"}`}></i>
                    <div className={`plus-menu ${ plus ? "open" : "closed"}`}>
                        <p>Create</p>
                        <div>Create pin</div>
                        <div onClick={openModal('create board')}>Create board</div>
                    </div>
                </div>
                {childrenContainers[tab]}
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
    const tabSelected = props.location.pathname.split("/")[3].toLowerCase() === "created"
                        ? Tab.CREATED
                        : Tab.SAVED;
    return {
        username: props.match.params.username,
        user: reverseSearch(users, "username", props.match.params.username),
        currentUser: users[session.id],
        tabSelected
    }
}

const mDTP = dispatch => {
    return {
        fetchUserByUsername: (username) => dispatch(fetchUserByUsername(username)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(UserShowContainer)
