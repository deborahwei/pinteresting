import React from 'react'

const BoardPreviewCover = (props) => {

    const {board, user, openModal} = props 
    // board should have access to its pins and the amount of pins

    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/users/${user.username}/boards/${board.name}`)
    }

    return (
        <div onClick={handleClick} className="board-preview-container">
            <div className="board-preview-cover">
                
            </div>
            <div className='board-preview-text'>
                <h1>{board.name}</h1>
                <p>{`Pins`}</p> 
            </div>
        </div>
    )

}


export default BoardPreviewCover