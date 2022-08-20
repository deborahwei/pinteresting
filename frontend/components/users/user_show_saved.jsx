import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchBoards} from '../../actions/board_actions'

const UserShowSavedContainer = ({fetchBoards, isUser, openModal, user}) => {

    const noSavedBoardsMessage = () => {
        return `${isUser ? "You haven't" : `${user.username} hasn't`} saved any Pins yet`
    }

    useEffect( () => {
        fetchBoards(user.id)
    }, [])

    console.log("fetched-boards")

    const noBoards = () => {
        
        return (
            <div className="no-saved-container">
                <h1>{noSavedBoardsMessage()}</h1>
                <Link to="/">
                    <div className={`find-ideas-button ${isUser ? "hide" : ""}`}>
                        <h1>Find ideas</h1>
                    </div>
                </Link>
            </div>
        )
    }

    const boardsIndex = () => {

    }
    // need userId for fetch boards

    // create adjustments if they are not current user 

    // return anyPins ? noPins() : savedPins()
}


const mDTP = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(null, mDTP)(UserShowSavedContainer)