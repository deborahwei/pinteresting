{/* <div className={`board${ownsBoard ? "-show" : "-hide"}}-number-pins`}></div> */}
// <div className={`board${ownsBoard ? "-show" : "-hide"}}-add-pins`}></div>
// import pins and the number of the pins, has a click dropdown, and also return either no pins or has pins 
import React from 'react'

const BoardShowPinsContainer = (props) => {

    const {openModal} = props

    return (
        <div className={`splash-individual-photo`}>
            <img className={`splash-photo-${photoId} ${showPhoto ? "show-photo" : "leaving-photo"}`} src={photoUrl} alt="" />
        </div>
    )

}


export default BoardShowPinsContainer