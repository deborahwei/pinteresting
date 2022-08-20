import React, { useState } from 'react'
import LoadingContainer from '../generic/loading'
import { Link } from 'react-router-dom'

const UserShowCreatedContainer = (props) => {

    const { isUser, user } = props
    const [loading, setLoading] = useState(false) // change when add pins

    const noSavedPinsMessage = () => {
        return isUser 
            ? "Inspire with an Idea Pin" 
            : "No Idea Pins yet, but there's a ton of potential"
    }

    const noPins = () => {
        
        return (
            <div className="no-created-container">
                <h1>{noSavedPinsMessage()}</h1>
                <Link to="/">
                    <div className={`idea-pin-button ${isUser ? "" : "hide"}`}>
                        <h1>Create</h1>
                    </div>
                </Link>
            </div>
        )
    }

    const userPinsIndex = () => {

    }

    //return loading ? <LoadingContainer/> : boardsEmpty ? noBoards() : boardsIndex()
    return loading ? <LoadingContainer/> : noPins()
}

export default UserShowCreatedContainer