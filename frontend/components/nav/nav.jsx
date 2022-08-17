import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'
// import { closeDropdown } from '../dropdown/close_dropdown'


const Nav = (props) => {
    
    const { currentUser, logout} = props

    const dropdownRef = useRef(null)
    // const [open, setOpen] = closeDropdown(dropdownRef, false) 
    const [open, setOpen] = useState(false)
    const [homeClicked, setHomeClicked] = useState(true)
    const [profileClicked, setProfileClicked] = useState(false)

    const handleDropdownClick = () => setOpen(!open)

    const handleProfileClick = () => {
        setHomeClicked(false)
        setProfileClicked(true)
    }

    const handleHomeClick = () => {
        setHomeClicked(true)
    }

    const openModal = (formType) => {
        return e => {
            e.preventDefault();
            props.openModal(formType)
        }
    }

    const loggedOut = () => (
        <div className="logged-out-nav">
            <div className='logo-header'>
                <i className="fa-brands fa-pinterest fa-2xl logo-pinterest"></i>
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
                <i className="fa-brands fa-pinterest fa-xl logo-logged-in"></i>
                <div className={`home-button ${homeClicked ? "home-button-clicked" : ""}`} onClick={handleHomeClick}>Home</div>
                <div className="logged-in-create">
                    <div>
                        Create
                        <i className="fa-solid fa-chevron-down fa-xs create-button"></i>
                        <div className='create-dropdown'>
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
                <div className='user-profile-icon' onClick={handleProfileClick}>
                    <img className="demo-user-pic" src={window.demoUserUrl} />
                </div>
                <div className="menu-container">
                    <div onClick={handleDropdownClick} className="menu-trigger">
                        <i className="fa-solid fa-chevron-down fa-xs"></i>
                    </div>
                    <nav ref={dropdownRef} className={`menu ${open ? 'open' : 'closed'}`}>
                        <div className='menu-dropdown'>
                            <p>Currently in</p>
                            <div className='dropdown-user' onClick={handleProfileClick}>
                                <img className="demo-user-pic" src={window.demoUserUrl} />
                                <div className='dropdown-user-text'>
                                    { currentUser.username }
                                    <h2>Personal</h2>
                                </div>
                            </div>
                            <div className='dropdown-more-options'>
                                <p>More options</p> 
                                <div className="logout-button" onClick={logout}> 
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