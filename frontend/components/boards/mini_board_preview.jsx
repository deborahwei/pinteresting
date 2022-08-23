import React from 'react'
import SavePinButton from '../buttons/save_button'

const MiniBoardPreview = ({board}) => {
    const content = () => {
        return (
            <div className='mini-board-preview-container'>
                <div className="mini-board-info">
                    <div className='mini-board-cover'>
                    </div>
                    <div className='mini-board-name'>
                        <h1></h1>
                    </div>
                </div>
                <SavePinButton/>
            </div>
        )
    }
    return content()
}

export default MiniBoardPreview