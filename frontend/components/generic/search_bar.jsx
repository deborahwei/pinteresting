import React, {useRef} from 'react'
import {closeDropdown} from '../dropdown/close_dropdown'
// import Data from '../data/pin_tags.json'

const SearchBarContainer = (props) => {

    const openRef = useRef(null)
    const [open, setOpen] = closeDropdown(openRef, false)
    const handleClick = () => setOpen(!open)
    
    const content = () => {

        return(
            <div className='search-bar'>
                <input 
                    ref={openRef}
                    onClick={handleClick}
                    placeholder="Search" 
                    onChange={e => setQuery(e.target.value)}
                    type="text"/>
                <div className={`magnifying-glass ${open? "hide" : ""}`}>
                    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
                <div className={`search-dropdown ${open? "" : "hide"}`}>
                </div>
                <div className={`search-bar-background ${open? "" : "hide"}`}></div>
            </div>
        )
    }
    return content()
        
}

export default SearchBarContainer





