import React from 'react'

const BoardShowPinsContainer = (props) => {

    const {openModal} = props

    const addPinButton = () => {
        return (
            <div className="add-pin"></div>
        )
    }

    const pinCounter = () => {

    }

    const hasNoPins = () => {
        <div>
            <h1>There aren't any Pins on this board yet</h1>
        </div>
    }

    const boardPinsIndex = () => {
        return (
            <div className={`splash-individual-photo`}>
                <img className={`splash-photo-${photoId} ${showPhoto ? "show-photo" : "leaving-photo"}`} src={photoUrl} alt="" />
            </div>
        )
    }

    return hasNoPins
}

export default BoardShowPinsContainer

{/* <div className={`board${ownsBoard ? "-show" : "-hide"}}-number-pins`}></div> */}
// <div className={`board${ownsBoard ? "-show" : "-hide"}}-add-pins`}></div>
// import pins and the number of the pins, has a click dropdown, and also return either no pins or has pins 