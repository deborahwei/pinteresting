import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ProfilePicture from '../users/profile_picture'
import { closeDropdown } from '../dropdown/close_dropdown'


const Nav = (props) => {
    
    const { currentUser, logout} = props
    
    const dropdownRef = useRef(null)
    const [open, setOpen] = closeDropdown(dropdownRef, false) 
    const createRef = useRef(null)
    const [createOpen, setCreateOpen] = closeDropdown(createRef, false)
    
    const onHome = useLocation().pathname === "/"
    const onProfile = useLocation().pathname.split('/')[1] === "users"
    
    const handleLogout = () => {
        logout()
    }
    
    const handleDropdownClick = () => {setOpen(!open)}
    const handleCreateClick = () => setCreateOpen(!createOpen)

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType)
        }
    }

    const loggedOut = () => (
        <div className="logged-out-nav">
            <div className='logo-header'>
                <a href="">
                    <i className="fa-brands fa-pinterest fa-2xl logo-pinterest"></i>
                </a>
                <h1 className="logo-text"> Pinteresting</h1>
            </div>
            <div className="logged-out-nav-right">
                <div className="socials">
                    <a href="">Portfolio</a>
                    <a href="https://github.com/deborahwei/pinteresting">Github</a>
                    <a href="https://www.linkedin.com/in/deborah-wei-163b10152/">LinkedIn</a>
                </div>
                <div className="logged-out-buttons">
                    <div className="nav-login" onClick={openModal('login')}>
                        Log in 
                    </div>
                    <div className="nav-signup" onClick={openModal('signup')}>
                        Sign up
                    </div>
                </div>
            </div>
        </div>        
    )


    const loggedIn = () => (
        <div className="logged-in-nav">
            <div className='logged-in-nav-left'>
                <NavLink to="/">
                    <i className="fa-brands fa-pinterest fa-xl logo-logged-in"></i>
                </NavLink>
                <Link to="/">
                    <div className={`home-button ${onHome ? "home-button-clicked" : ""}`} >Home</div>
                </Link>
                <div className="nav-create-container">
                    <div ref={createRef} onClick={handleCreateClick} className="nav-create-trigger">
                        Create
                        <i className="fa-solid fa-chevron-down fa-xs create-button"></i>
                        <div className={`nav-create-menu ${createOpen ? 'open' : 'closed'}`}>
                            <div className='create-pin'>Create pin</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='search-bar'>
                <div className='magnifying-glass'>
                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
                <input type="text"/>
            </div>

            <div className="logged-in-nav-right">
                <div className="logged-in-socials">
                    <i className="fa-brands fa-github fa-xl"></i>
                    <i className="fa-brands fa-linkedin-in fa-xl"></i>
                    <i className="fa-solid fa-user fa-xl"></i>
                </div>
            <div className={`user-profile-icon user-avatar${onProfile ? "-clicked" : ""}`} >
                    <Link to={`/users/${currentUser.username}/saved/`}>
                        <ProfilePicture user={currentUser} hasPhoto={false}/> 
                    </Link>
                </div>
                <div className="menu-container">
                    <div  ref={dropdownRef} onClick={handleDropdownClick} className="menu-trigger">
                        <i className="fa-solid fa-chevron-down fa-xs"></i>
                    </div>
                    <nav className={`menu ${open ? 'open' : 'closed'}`}>
                        <div className='menu-dropdown'>
                            <p>Currently in</p>
                            <Link to={`/users/${currentUser.username}/saved`} >
                                <div className='dropdown-user'>
                                    <div className="dropdown-user-pic">
                                        <ProfilePicture user={currentUser} hasPhoto={false}/> 
                                    </div>
                                    <div className='dropdown-user-text'>
                                        { currentUser.username }
                                        <h2>Personal</h2>
                                    </div>
                                </div>
                            </Link>
                            <div className='dropdown-more-options'>
                                <p>More options</p> 
                                <div className="logout-button" onClick={handleLogout}> 
                                    Log out 
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )

    return currentUser ? loggedIn() : loggedOut()

}

const mSTP = ({session, entities: { users }}) => {
    return {
        currentUser: users[session.id],
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: (formType) => dispatch(openModal(formType)),
    }
}

export default connect(mSTP, mDTP)(Nav)