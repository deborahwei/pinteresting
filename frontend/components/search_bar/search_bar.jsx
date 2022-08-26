import React, {useRef, useState} from 'react'
import { connect } from 'react-redux'
import {closeDropdown} from '../dropdown/close_dropdown'
import SearchBarCategories from './search_bar_categories'
import SearchBoardPreview from './search_bar_mini_board'
import { PIN_KEYWORDS } from '../../util/constants_util'

const SearchBarContainer = (props) => {

    const {boards, currentUser} = props

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const [typing, setTyping] = useState(false)

    const [query, setQuery] = useState('')
    const updateQuery = (e) => {
        setQuery(e.currentTarget.value)
        setTyping(e.currentTarget.value !== "")
    }
    
    // const [categoryQuery, setCategoryQuery] = useState('')

    const userBoards = currentUser.boards.map((boardId) => boards[boardId])

    // const handleKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         PIN_KEYWORDS.forEach((keyword) => {
    //             if (keyword.includes(query)) {
    //                 setCategoryQuery(query)
    //             }
    //         })
    //     }
    // }
    
    const content = () => {

        return(
            <div className='search-bar'>
                <div className={`search-bar-background ${open ? "" : "hide"}`}></div>
                <input 
                    ref={openRef}
                    onClick={handleClick}
                    placeholder="Search" 
                    onChange={updateQuery}
                    // onKeyDown={handleKeyDown}
                    type="text"/>
                <div className={`magnifying-glass ${open || typing ? "hide" : ""}`}>
                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
                <div className={`${open ? "" : "hide"} search-dropdown`}>
                    <div className={`search-categories-container ${typing? "hide" : ""}`}>
                        {PIN_KEYWORDS.map( (category, i) => <SearchBarCategories key={i} query={query} category={category}/>)}
                    </div>
                    <div className={`search-boards-container ${typing? "" : "hide"}`}>
                        {userBoards.map( (userBoard, i) => <SearchBoardPreview currentUser={currentUser} query={query} board={userBoard} key={i}/>)} 
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
        currentUser: users[session.id]
    }
}

export default connect(mSTP, null)(SearchBarContainer)





