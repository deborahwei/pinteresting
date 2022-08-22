import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchBoardPins } from '../../actions/board_pins_actions'
import LoadingContainer from '../generic/loading'
import { fetchBoardByName } from '../../actions/board_actions'
import BoardPinsIndexContainer from '../pins/board_pins_index'

const BoardShowPinsContainer = (props) => {

    const {isUser, user, boardName, boards, pins, fetchBoardPins, fetchBoardByName} = props
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        fetchBoardByName(user.id, boardName)
            .then(resp => {
                fetchBoardPins(resp.board.id)
            })
            .then(resp => {
                
            })
            .finally((setLoading(false)))
    }, [user, boardName])

    const currentBoard = Object.values(boards).filter(board => board.name === boardName && board.user_id === user.id)
    
    const currentBoardPins = () => {
        const filteredPins = []
        const currentBoardPins = currentBoard[0]?.pins
        Object.values(pins).forEach( (pin) => {
            currentBoardPins.forEach( (boardPin) => {
                if (pin.id === boardPin) {
                    filteredPins.push(pin)
                }
            })
        })
        return filteredPins
    }

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
                    pins={currentBoardPins()}
                />
            </div>
        )
    }

    return loading ? <LoadingContainer/> : boardPinsIndex()
}

const mSTP = ({entities:{ boards, pins}}) => {
    return {
        boards,
        pins
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