import React from 'react'
import { Link } from 'react-router-dom'

const UserShowCreatedContainer = () => {

    const noPinsCreated = () => {
        
        return (
            <div className="no-created-container">
                <h1>Inspire with an Idea Pin</h1>
                <Link to="/">
                    <div className="idea-pin-button">
                        <h1>Create</h1>
                    </div>
                </Link>
            </div>
        )
    }

    // return anyPins ? noPins() : CreatedPins()
    // create adjustments if they are not current user 

    return noPinsCreated()
}

export default UserShowCreatedContainer