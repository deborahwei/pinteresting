import React from 'react'
import { Link } from 'react-router-dom'

const UserShowSavedContainer = () => {

    const noPinsSaved = () => {
        
        return (
            <div className="no-saved-container">
                <h1>You haven't saved any Pins yet</h1>
                <Link to="/">
                    <div className="find-ideas-button">
                        <h1>Find ideas</h1>
                    </div>
                </Link>
            </div>
        )
    }

    // return anyPins ? noPins() : savedPins()
    return noPinsSaved()
}

export default UserShowSavedContainer