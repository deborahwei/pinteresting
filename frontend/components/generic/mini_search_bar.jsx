import React, {useRef, useState} from 'react'

const MiniSearchBar = (props) => {

    const {updateQuery} = props

    const update = (e) => {
        updateQuery(e.currentTarget.value)
    }

    const content = () => {

        return(
                <div className="pin-dropdown-search-bar">
                    <input type="text" onChange={update} placeholder='Search'/>
                    <i className="pin-search fa-solid fa-magnifying-glass fa-sm"></i>
                </div>
        )
    }
    return content()
        
}

export default MiniSearchBar





