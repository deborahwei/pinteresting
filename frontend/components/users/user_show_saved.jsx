import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchBoards} from '../../actions/board_actions'
import { openModal } from '../../actions/modal_actions'
import LoadingContainer from '../generic/loading'
import BoardPreviewContainer from "../boards/board_preview_show"
import { fetchPins } from "../../actions/pin_actions"
import ProfilePins from '../pins/profile_saved_pins'

const UserShowSavedContainer = (props) => {
    const {fetchBoards, isUser, openModal, user, boards, pins, fetchPins} = props
    const boardsEmpty = Object.keys(boards).length === 0
    const [loading, setLoading] = useState(boardsEmpty)

    const noSavedBoardsMessage = () => {
        return `${isUser ? "You haven't" : `${user.username} hasn't`} saved any Pins yet`
    }

    useEffect( () => {
        fetchBoards(user.id)
            .then(resp => {
                const pinsSet = new Set();
                Object.values(resp.boards).forEach( board => {
                    board.pins.forEach(pinId => pinsSet.add(pinId));
                })
                const pinIdsArray = [];
                for (const pinId of pinsSet) {
                    if (!(pinId in pins))
                        pinIdsArray.push(pinId)
                }
                return fetchPins(pinIdsArray)
            })
            .finally(() => (setLoading(false)))
    }, [user])
    const currentBoards = Object.values(boards).filter( board => board.user_id == user.id )
    
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
                currentBoards.map( (board, i) => <BoardPreviewContainer
                key={i}
                board={board}
                openModal={openModal}
                user={user} 
                isUser={isUser}
                pins={board.pins.map(id => pins[id])}
                /> )
            }
        </div>
        )

    }

    const content = () => {
        return (
            <div className='user-show-content'>
                <div className='board-or-nah-container'>
                    {boardsEmpty ? noBoards() : boardsIndex()}
                </div>
                <div className="unorganized-ideas">
                    <div className="unorganized-ideas-header">
                        <h1>Unorganized Ideas</h1>
                    </div>
                    <ProfilePins/>
                </div>
            </div>
        )
    }
          
    return loading ? <LoadingContainer/> : content()

}

const mSTP = ({entities: {boards, pins}}) => {

    return {
        boards,
        pins
    }
}

const mDTP = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        openModal: (formType, props) => dispatch(openModal(formType, props)),
        fetchPins: (boards, pins) => dispatch(fetchPins(boards, pins))
    }
}

export default connect(mSTP, mDTP)(UserShowSavedContainer)