import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ( { currentUser, logout }) => {
    const sessionLinks = () => (
        <div>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Signup</Link>
        </div>
    )

    const personalGreeting = () => (
        <div>
            <h1>Hello {currentUser.username} </h1>
            <button onClick={logout}>Logout</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks()
}

export default Nav