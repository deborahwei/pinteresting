import React from 'react'
import EditBoardButton from '../buttons/edit_board_button'

export const BoardPreviewCover = (props) => {


    return (
        <div className="board-preview-cover-container">

            <div className="preview-board-edit">
                <EditBoardButton/>
            </div>
        </div>
    )

}


export default BoardPreviewCover