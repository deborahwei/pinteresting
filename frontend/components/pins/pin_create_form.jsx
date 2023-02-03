import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LoadingContainer from '../generic/loading'
import { fetchBoards } from '../../actions/board_actions'
import { createPin } from '../../actions/pin_actions'

const PinsCreateForm = (props) => {

    const { currentUser, fetchBoards, createPin} = props
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    const [errors, setErrors] = useState(false)

    useEffect( () => {
        fetchBoards(currentUser.id).finally(() => setLoading(false))
    }, [])

    const [state, setState] = useState({
        title: "", 
        description: "", 
        imageFile: null, 
        imageUrl: null
    })

    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const handlePinFile = (e) => {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];

        fileReader.onloadend = () => {
            setState(prevState => {
                return { ...prevState, imageFile: file}
            })
            setState(prevState => {
                return { ...prevState, imageUrl: fileReader.result }
            })
        }
        
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            setState({...state}, { imageFile: null })
            setState({...state}, { imageUrl: null })
        }
    }

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (!state.imageFile) {
            setErrors(true);
        }

        const formData = new FormData();
        formData.append('pin[title]', state.title);
        formData.append('pin[description]', state.description);
        formData.append('pin[image]', state.imageFile);
        createPin(formData, currentUser.id).then((resp) => {
            if (resp?.type !=="RECEIVE_PIN_ERRORS") {
                history.push(`/users/${currentUser.username}/created`)
            }
            else {
                setErrors(true)
            }
        })
    }

    const preview = state.imageUrl ? <div style={{ backgroundImage: `url(${state.imageUrl}`}}/> : null;

    const content = () => {
        return (
            <div>
                <div className="pin-create-background"></div>
                <form onSubmit={handlePinSubmit} action="">
                    <div className="pin-create-container">
                        <div className='pin-create-left-container'>
                            <div className='upload-container'>
                                {preview}
                                <div className="upload-file-input">
                                    {!state.imageUrl &&
                                        <>
                                            <div className='pin-create-image-upload'>
                                                <i className="fa-solid fa-circle-up fa-2xl"></i>
                                                <h2>Drag and drop or click to upload</h2>
                                                <p>Recommendations: Use high-quality .jpg files less than 20MB</p>
                                            </div>
                                        </>
                                    }
                                    <input 
                                        className='pin-create-image-container'
                                        type="file"
                                        onChange={handlePinFile}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className={`${errors ? "" : "hide"} pin-errors`}>Must attach image</div>
                        </div>

                        <div className="pin-create-right-container">
                            <div className="pin-create-form"> 
                                <div className="pin-create-title">
                                    <textarea 
                                    id="pin-create-title" 
                                    type="text" 
                                    value={state.title}
                                    placeholder="Add your title"
                                    onChange={update('title')}
                                    />
                                </div>
                                <div className='pin-create-creator'>
                                    
                                </div>
                                <div className="pin-create-description">
                                    <textarea 
                                    id="pin-create-description" 
                                    type="text" 
                                    value={state.description}
                                    placeholder="Tell everyone what you Pin is about"
                                    onChange={update('description')}
                                    />
                                </div>
                                <button type="submit" className={`clickable board-create-button create-form`}>
                                    <h1>Create</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )

    }

    return loading ? <LoadingContainer/> : content()
}

const mSTP = ({session, entities: { users, boards }}) => {
    return {
        currentUser: users[session.id], 
        boards, 
    }
}

const mDTP = dispatch => {
    return {
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        createPin: (pin, userId) => dispatch(createPin(pin, userId))
    }
}

export default connect(mSTP, mDTP)(PinsCreateForm)