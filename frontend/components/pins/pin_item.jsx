import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { MAX_TITLE_CHAR, MAX_BOARD_CHAR } from '../../util/constants_util'
import { abbreviate } from '../../util/function_util'
import UserPreviewContainer from '../users/user_preview'
import SavePinButton from '../buttons/save_button'
import { closeDropdown } from '../dropdown/close_dropdown'
import AddPinDropdown from './add_pin_dropdown'

const PinPhotoContainer = ({pin, creator, selection}) => {

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const [currentSelection, setCurrentSelection] = useState(selection)

    const handleClick = () => setOpen(!open)

    const handleDropdownClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const updateCurrentSelection = (selection) => {
        setCurrentSelection(selection);
        setOpen(false);
    }

    return (
        <div className='pin-item-container'>
                <img src={pin.imageUrl}></img>
            <div className={`pin-item-hover`}>
                <div className={`pin-item-hover-board-name`}>
                    <div className={`pin-dropdown-trigger`} onClick={handleClick} ref={openRef}>
                        <h1>{abbreviate(currentSelection?.name ?? "Profile", MAX_BOARD_CHAR)}</h1>
                        <i className='fa-solid fa-chevron-down fa-xs'></i>
                    </div>
                    <SavePinButton boardId={currentSelection?.id} pinId={pin.id}/>
                </div>
                <Link to={`/pins/${pin.id}`} className="pin-show-link">
                    <div>
                    </div>
                </Link>
            </div>
            <div onClick={handleDropdownClick} className={`pin-add-menu ${open ? "open" : "closed"}`}>
                <AddPinDropdown pin={pin} updateCurrentSelection={updateCurrentSelection}/> 
            </div>
            <div className='pin-item-info'>
                <div className='pin-item-title'>
                    {abbreviate(pin.title, MAX_TITLE_CHAR)}
                </div>
                <div className='pin-item-user'>
                    <UserPreviewContainer user={creator}/>
                </div>
            </div>
        </div>
    )

}

const mSTP = (_, props) => {
    return {
        pin: props.pin,
        creator: props.creator,
        selection: props.board,
    }
}

export default connect(mSTP, null)(PinPhotoContainer)