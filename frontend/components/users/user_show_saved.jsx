import React from 'react'

const UserShowSavedContainer = (props) => {

    const {anyPins} = props

    const savedPins= () => {

    }

    const noPins = () => {
        
        return (
            <div className="no-saved-container">
                <h1>You haven't saved any Pins yet</h1>
                <div className="find-ideas-button">
                    Find ideas
                </div>
            </div>
        )
    }

    return anyPins ? noPins() : savedPins()
}

export default UserShowSavedContainer