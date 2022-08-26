import React, {useEffect, useState} from 'react'
import SavePinButton from '../buttons/save_button'
import { abbreviate } from '../../util/function_util'
import { MAX_NAME_CHAR } from '../../util/constants_util'
import { fetchBoardCover } from '../../actions/board_actions'
import { connect } from 'react-redux'
import LoadingContainer from "../generic/loading"
import MiniBoardCover from './mini_board_cover'

const MiniBoardPreview = ({board, pin, updateCurrentSelection, query, pins, fetchBoardCover}) => {

    const show = board?.name.toLowerCase().includes(query.toLowerCase())
    // const coverPin = pins[board?.pins[0]]

    // const [loading, setLoading] = useState(true)
    // useEffect( () => {
    //     if (board?.pins.length > 0) {
    //         fetchBoardCover(board.id).finally(() => setLoading(false))
    //     }
    //     else {
    //         setLoading(false)
    //     }
    // }, [])

    const content = () => {
        return (
            <div onClick={()=> updateCurrentSelection(board)} 
            className={`mini-board-preview-container ${show ? "" : "hide"}`}>
                <div className='mini-board-cover'>
                    <MiniBoardCover pinId={board?.pins[0]}/>
                    {/* <div className='div-image mini-board'
                    style={{ backgroundImage: `url(${coverPin?.imageUrl}`}}
                    ></div> */}
                </div>
                <div className="mini-board-info">
                    <div className='mini-board-name'>
                        <h1>{abbreviate(board?.name ?? "Profile", MAX_NAME_CHAR)}</h1>
                    </div>
                    <div>
                        <SavePinButton boardId={board?.id} pinId={pin?.id}/>
                    </div>
                </div>
            </div>
        )
    }

    // return loading ? <LoadingContainer/> : content()
    return content()
}

const mSTP = ({entities: {pins}}) => {
    return {
        pins
    }
}


const mDTP = (dispatch) => {
    return {
        fetchBoardCover: (boardId) => dispatch(fetchBoardCover(boardId))
    }
}

export default connect(mSTP, mDTP)(MiniBoardPreview)