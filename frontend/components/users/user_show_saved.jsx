import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchBoards} from '../../actions/board_actions'
import LoadingContainer from '../generic/loading'

const UserShowSavedContainer = ({fetchBoards, isUser, openModal, user, boards}) => {
    
    const boardsEmpty = Object.keys(boards).length === 0
    const [loading, setLoading] = useState(boardsEmpty)

    const noSavedBoardsMessage = () => {
        return `${isUser ? "You haven't" : `${user.username} hasn't`} saved any Pins yet`
    }

    useEffect( () => {
        fetchBoards(user.id).finally((setLoading(false)))
    }, [])

    const noBoards = () => {
        
          return (     
          <div className="no-saved-container">
                <h1>{noSavedBoardsMessage()}</h1>
                <Link to="/">
                    <div className={`find-ideas-button ${isUser ? "" : "hide"}`}>
                        <h1>Find ideas</h1>
                    </div>
                </Link>
            </div>
            )
    }
    


    const boardsIndex = () => {
        return (
        <div className="boards-index-container">
            {
                boards.map( (board, i) => <BoardPreviewContainer
                board={board}
                openModal={openModal}
                /> )
            }
        </div>
        )

    }
          

    return loading ? <LoadingContainer/> : boardsEmpty ? noBoards() : boardsIndex()
    // return loading ? <LoadingContainer/> : boardsEmpty ? boardsIndex() : noBoards()
}

const mSTP = ({entities: {boards}}) => {
    return {
        boards
    }
}



const mDTP = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(UserShowSavedContainer)