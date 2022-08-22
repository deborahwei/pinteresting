import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchBoardPins } from '../../actions/board_pins_actions'
import LoadingContainer from '../generic/loading'
import { fetchBoardByName } from '../../actions/board_actions'
import BoardPinsIndexContainer from '../pins/board_pins_index'

const BoardShowPinsContainer = (props) => {

    const {ownsBoard, user, boardName, board, fetchBoardPins, pins, fetchBoardByName} = props
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        fetchBoardPins(board.id)
            .finally(() => setLoading(false))
    }, [user, boardName])

    const addPinButton = () => {
        return (
            <div className={`board-show-plus-container ${!isUser ? "hide" : ""}`}>
                <div className={`plus-circle-${ plus ? "clicked" : "unclicked"}`}></div>
                    <i ref={plusRef} onClick={handlePlusClick} className={`fa-solid fa-plus fa-2xs plus-${ plus ? "clicked" : "unclicked"}`}></i>
                <div className={`plus-menu ${ plus ? "open" : "closed"}`}>
                    <p>Create</p>
                    <div>Pin</div>
                </div>
            </div>
        )
    }

    const currentBoardPins = board.pins.map((pinId) => pins[pinId])

    const pinCounter = () => {
        
    }

    const hasNoPins = () => {
        return (
            <div className='board-show-no-pins'>
                <h1>There aren't any Pins on this board yet</h1>
            </div>
        )
    }

    const boardPinsIndex = () => {
        return (
            <div className="board-show-pins-container">
                <BoardPinsIndexContainer
                    pins={currentBoardPins}
                />
            </div>
        )
    }

    return loading ? <LoadingContainer/> : boardPinsIndex()
    }

const mSTP = ({entities: {pins}}, props) => {

    return {
        pins, 
        board: props.board, 
        user: props.user, 
        boardName: props.boardName, 
        ownsBoard: props.ownsBoard
        
    }
}

const mDTP = (dispatch) => {
    return {
        fetchBoardPins: (boardId) => dispatch(fetchBoardPins(boardId)),
        fetchBoardByName: (userId, name) => dispatch(fetchBoardByName(userId, name))
    }
}

export default connect(mSTP, mDTP)(BoardShowPinsContainer)

{/* <div className={`board${ownsBoard ? "-show" : "-hide"}}-number-pins`}></div> */}
// <div className={`board${ownsBoard ? "-show" : "-hide"}}-add-pins`}></div>
// import pins and the number of the pins, has a click dropdown, and also return either no pins or has pins 