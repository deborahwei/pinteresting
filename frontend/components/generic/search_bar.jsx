import React, {useRef, useState} from 'react'
import {closeDropdown} from '../dropdown/close_dropdown'
import SearchBarCategories from './search_bar_categories'

const SearchBarContainer = (props) => {

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)

    const [show, setShow] = useState(true)
    const handleChange = () => setShow(value === "")
    console.log(show)
    
    const content = () => {

        return(
            <div className='search-bar'>
                <input 
                    ref={openRef}
                    onClick={handleClick}
                    placeholder="Search" 
                    onChange={handleChange}
                    type="text"/>
                <div className={`magnifying-glass ${open? "hide" : ""}`}>
                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
                <div className={`search-dropdown ${open? "" : "hide"}`}>
                    <SearchBarCategories/>
                </div>
                <div className={`search-bar-background ${open? "" : "hide"}`}></div>
            </div>
        )
    }
    return content()
        
}

export default SearchBarContainer





