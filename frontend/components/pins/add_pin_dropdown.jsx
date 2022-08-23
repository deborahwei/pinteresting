import React, {useState, useEffect} from 'react'
import { connect, Link } from 'react-redux'
import { fetchBoards } from '../../util/board_api_util'
import LoadingContainer from '../generic/loading'
import MiniBoardPreview from '../boards/mini_board_preview'
import { openModal } from '../../actions/modal_actions'

const AddPinDropdown = ({boards, currentUser, openModal}) => {

    const [loading, setLoading] = useState(false)

    useEffect( () => {
        fetchBoards(currentUser.id).finally(()=> setLoading(false))
    }, [])

    console.log(boards)
    const userBoards = currentUser.boards.map( (boardId) => boards[boardId])

    const handleOpenModal = (formType) => {
        return e => {
            e.preventDefault();
            openModal(formType)
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
                         {userBoards.map( (userBoard, i) => <MiniBoardPreview board={userBoard} key={i}/>)} 
                    </div>
                </div>
                <div className='pin-dropdown-create'>
                    <p>Suggestions</p>
                    <div onClick={handleOpenModal("create board")} className='pin-dropdown-create-board'>
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

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: {boards, users}}) => {
    return {
        boards, 
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)), 
        openModal: (formType) => dispatch(openModal(formType))
    }
}

export default connect(mSTP, mDTP)(AddPinDropdown)