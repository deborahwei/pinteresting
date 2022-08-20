import React, { useState, useRef, useEffect } from 'react'
import { NavLink, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal_actions'
import { reverseSearch } from '../../util/function_util'
import { fetchUserByUsername } from '../../actions/user_actions'
import { fetchBoardByName } from '../../actions/board_actions'
import LoadingContainer from '../generic/loading'
import ProfilePicture from '../users/profile_picture'
import { closeDropdown } from '../dropdown/close_dropdown'

const BoardShowContainer = (props) => {
   
    const { board, user, currentUser, boardName, username, fetchBoardByName, fetchUserByUsername, openModal, modal } = props 

    const [loading, setLoading] = useState(!user)
    useEffect(() => {
        if (!user) {
            fetchUserByUsername(username).then( ( {user} ) => {
                if (!board && user?.id) {
                    fetchBoardByName(user.id, boardName)
                        .finally(() => {
                        setLoading(false)
                    })
                }
            }).then(() => {
                setLoading(false)
            })
        }
        if (!board && user?.id) { // clean this up
            fetchBoardByName(user.id, boardName)
                .finally(() => {
                setLoading(false)
            })
        }

    }, [])

    
    const ownsBoard = currentUser.username === user?.username

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            closeModal()
            setOpen(false)
            openModal(formType, props)
        }
    }
    
    const content = () => (
        <div className='board-show-container'>
            <div className="board-show-header">
                <div className="board-show-name">
                    <h1>{board?.name}</h1>
                    <div 
                        className={
                            `board${ownsBoard ? "-show" : "-hide"}-options options-${ open ? "clicked" : "unclicked"}
                        `}
                 
                        ref={openRef}
                    >
                        <p onClick={handleClick}>...</p>
                        <div className={`options-menu ${ open ? "open" : "closed"}`}>
                            <p>Board options</p>
                            <div onClick={handleOpenModal('edit board', 
                            {
                                boardName: board?.name,
                                path: `/users/${user?.username}/boards/${board?.name}`
                            } )} className="edit-board-option">Edit board</div>
                        </div>
                    </div>
                </div>
                <div className="board-show-owner">
                    <NavLink to={`/users/${user.username}/saved`}>
                        <div className='board-show-owner-profile'>
                            <ProfilePicture user={ownsBoard ? currentUser : user} hasPhoto={false}/>
                        </div>
                    </NavLink>
                </div>
                <div className={`board-show-description ${board?.description != "" ? "" : "hide"}`}>
                    <p>{board?.description}</p>
                </div>
            </div>
            <div className="board-show-pins">

            </div>
        </div>
    )
    
    return (loading) ? <LoadingContainer/> : content();  
}

const mSTP = ({session, entities: {users, boards}}, props) => {
    return {
        board: reverseSearch(boards, "name", props.match.params.boardName),
        boardName: props.match.params.boardName, 
        currentUser: users[session.id], 
        user: reverseSearch(users, "username", props.match.params.username), 
        username: props.match.params.username
    }
}

const mDTP = dispatch => {
    return {
        fetchUserByUsername: (username) => dispatch(fetchUserByUsername(username)),
        openModal: (formType, props) => dispatch(openModal(formType, props)),
        closeModal: () => dispatch(closeModal()),
        fetchBoardByName: (userId, boardName) => dispatch(fetchBoardByName(userId, boardName))
    }
}

export default connect(mSTP, mDTP)(BoardShowContainer)