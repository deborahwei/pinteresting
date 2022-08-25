import React, {useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import LoadingContainer from '../generic/loading'
import PinCommentContainer from '../comments/comments'
import { fetchPin } from '../../actions/pin_actions'
import { fetchBoards } from '../../actions/board_actions'
import {closeDropdown} from '../dropdown/close_dropdown'
import { fetchUser } from '../../actions/user_actions'
import AddPinDropdown from './add_pin_dropdown'
import SavePinButton from '../buttons/save_button'
import UserPreviewContainer from '../users/user_preview'
import { abbreviate } from '../../util/function_util'
import { MAX_BOARD_CHAR } from '../../util/constants_util'
import { closeModal, openModal } from '../../actions/modal_actions'

const PinShowContainer = (props) => {

    const {fetchBoards, fetchPin, fetchUser, closeModal, openModal, currentUser, boards, users, pinId, pins} = props
    const [loading, setLoading] = useState(true)
    const [currentSelection, setCurrentSelection] = useState(null)
    
    useEffect( () => {
        fetchPin(pinId)
        .then((resp) => fetchUser(resp.pin.creator))
        .then(() => fetchBoards(currentUser.id))
        .finally(() => setLoading(false))
    }, [])
    
    const handleGoBack = (e) => {
        e.preventDefault();
        window.history.back();
    }
    
    const updateCurrentSelection = (selection) => {
        setCurrentSelection(selection);
        setOpen(false);
    }
    
    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)
    const handleDropdownClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    
    const editRef = useRef(null)
    const [edit, setEdit] = closeDropdown(editRef, false)
    const handleEditDropdown = () => setEdit(!edit)
    const handleOpenModal = (formType, props) => {
        return e => {
            e.preventDefault();
            openModal(formType, props)
        }
    }
    
    const pin = pins[pinId]

    const creator = users[pin?.creator]
    const ownsPin = creator?.id === currentUser?.id
    
    const content = () => {
        return (
            <div>
                <div onClick={handleGoBack} className="pin-show-background"></div>
                <div className="pin-show-container">
                    <div className='pin-show-image-container'
                        style={{backgroundImage: `url(${pin?.imageUrl}` }}
                        >
                    </div>
                    <div className="pin-show-right-container">
                        <div className="pin-show-heading">
                            <div 
                            className={`pin-options`}
                            >
                            </div>
                            <div className="pin-show-boards">
                                <div 
                                    onClick={handleDropdownClick} 
                                    className={`show-pin pin-add-menu ${open ? "open" : "closed"}`}>
                                    <AddPinDropdown pin={pin} updateCurrentSelection={updateCurrentSelection}/> 
                                </div>
                                <div className={`pin-item-hover-board-name`}>
                                    <div className={`pin-dropdown-trigger`} onClick={handleClick} ref={openRef}>
                                        <h1 >{abbreviate(currentSelection?.name ?? "Profile", MAX_BOARD_CHAR)}</h1>
                                        <i className='fa-solid fa-chevron-down fa-xs'></i>
                                    </div>
                                    <SavePinButton boardId={currentSelection?.id} pinId={pin.id} isOutside={true}/>
                                </div>
                            </div>
                            <div className='pin-text'>
                                <div className='pin-title'>{pin.title}</div>
                                <div className='pin-description'>{pin.description}</div>
                            </div>
                            <div className='pin-show-creator'>
                                <UserPreviewContainer user={creator}/>
                            </div>
                        </div>
                        <div className='pin-comments'>
                            <PinCommentContainer pin={pin}/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    
    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: { users, pins, boards }}, props) => {
    return {
        pinId: props.match.params.pinId,
        currentUser: users[session.id], 
        pins, 
        users, 
        boards
    }
}

const mDTP = dispatch => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchBoards: (userId) => dispatch(fetchBoards(userId)), 
        fetchUser: (userId) => dispatch(fetchUser(userId)), 
        openModal: (formType, props) => dispatch(openModal(formType, props)), 
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(PinShowContainer)