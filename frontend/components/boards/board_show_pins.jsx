import React, {useState, useRef, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBoardPins } from '../../actions/board_pins_actions'
import LoadingContainer from '../generic/loading'
import BoardPinsIndexContainer from '../pins/board_pins_index'
import {closeDropdown} from '../dropdown/close_dropdown'

const BoardShowPinsContainer = (props) => {

    const {ownsBoard, user, boardName, board, fetchBoardPins, pins, hasPins} = props
    
    const [loading, setLoading] = useState(true)
    const plusRef = useRef(null)
    const [plus, setPlus] = closeDropdown(plusRef, false)
    const handlePlusClick = () => setPlus(!plus)

    useEffect( () => {
        fetchBoardPins(board.id)
            .finally(() => setLoading(false))
    }, [user, boardName])

    const pinCount = board.pins.length

    const boardShowButtons = () => {
        return (
            <div className={`board-show-buttons ${!ownsBoard ? "hide": ""}`}>
                <div className={`add-pin-button`}>
                    <div ref={plusRef} onClick={handlePlusClick} className={`board-show-plus ${ plus ? "clicked" : "unclicked"}`}>
                        <i className={`fa-solid fa-plus fa-2xl`}></i>
                    </div>
                    <div className={`plus-menu ${ plus ? "open" : "closed"} board-show`}>
                        <p>Create</p>
                        <Link to={"/pin-builder"}>
                            <div>Pin</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const currentBoardPins = board.pins.map((pinId) => pins[pinId])

    const hasNoPins = () => {
        return (
            <div className='board-show-no-pins'>
                <h1>There aren't any Pins on this board yet</h1>
                {boardShowButtons()}
            </div>
        )
    }

    const boardPinsIndex = () => {
        return (
            <div className="board-show-pins-container">
                <div className='pins-counter'>
                    {`${pinCount} Pins`}
                </div>
                <BoardPinsIndexContainer
                    pins={currentBoardPins}
                    board={board}
                />
               {boardShowButtons()}
            </div>
        )
    }

    return loading ? <LoadingContainer/> : hasPins ? boardPinsIndex() : hasNoPins()
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
    }
}

export default connect(mSTP, mDTP)(BoardShowPinsContainer)
