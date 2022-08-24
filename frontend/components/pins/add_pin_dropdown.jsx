import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import MiniBoardPreview from '../boards/mini_board_preview'
import { openModal } from '../../actions/modal_actions'

const AddPinDropdown = ({boards, currentUser, openModal, pin, updateCurrentSelection}) => {

    const userBoards = currentUser.boards.map( (boardId) => boards[boardId])
    
    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            openModal(formType, props)
        }
    }

    const content = () => {
        return (
            <div className='pin-dropdown-container'>
                <div className='pin-dropdown-title'>
                    <h1>Save</h1>
                </div>
                <div className='pin-dropdown-search'>
                    <div className="pin-dropdown-search-bar">
                        <input type="text" placeholder='Search'/>
                        <i className="pin-search fa-solid fa-magnifying-glass fa-sm"></i>
                    </div>
                </div>
                <div className='pin-dropdown-boards'>
                    <p>Save to board</p>
                    <div className='pin-dropdown-board-container'> 
                        <MiniBoardPreview updateCurrentSelection={updateCurrentSelection} board={null} currentUser={currentUser} pin={pin}/>
                         {userBoards.map( (userBoard, i) => <MiniBoardPreview updateCurrentSelection={updateCurrentSelection} board={userBoard} key={i} currentUser={currentUser} pin={pin}/>)} 
                    </div>
                </div>
                <div className='pin-dropdown-create'>
                    <p>Suggestions</p>
                    <div onClick={handleOpenModal("create board", { boardShow: true})} className='pin-dropdown-create-board'>
                        <div className='pin-add-board'>
                            <i className={`fa-solid fa-plus fa-xl`}></i>
                        </div>
                        <div>
                            <h1>Create board</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return content()

}

const mSTP = ({session, entities: { boards, users}}, {pin}) => {
    return {
        boards,
        currentUser: users[session.id],
        pin
    }
}

const mDTP = dispatch => {
    return {
        openModal: (formType, props) => dispatch(openModal(formType, props))
    }
}

export default connect(mSTP, mDTP)(AddPinDropdown)