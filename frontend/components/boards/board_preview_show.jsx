import React from 'react'
import BoardPreviewCover from './board_preview_cover'
import EditBoardButton from '../buttons/edit_board_button'

const BoardPreviewContainer = (props) => {

    // const {board, user, openModal} = props 
    // board should have access to its pins and the amount of pins

    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/users/${user.username}/boards/${board.name}`)
    }

    return (
        // <div onClick={handleClick} className="board-preview-container">
        //     <div className="board-preview-cover">
        //         {/* <BoardPreviewCover/> */}
        //         <div className="preview-board-edit">
        //             {/* <EditBoardButton/> */}
        //         </div>
        //     </div>
        //     <div className='board-preview-text'>
        //         {/* <h1>{board.name}</h1> */}
        //         <p>{`Pins`}</p> 
        //     </div>
        // </div>
        <h1>HI</h1>
    )

}


export default BoardPreviewContainer