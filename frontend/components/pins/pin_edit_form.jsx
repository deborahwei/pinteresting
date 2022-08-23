import React, {useState} from "react";
import { connect } from "react-redux";
import { updatePin } from "../../actions/pin_actions";

const PinEditForm = (props) => {

    const { updatePin, pin } = props 

    const [state, setState] = useState({
        title: pin.title, 
        description: pin.description ?? "", 
        id: pin.id
    })

    const renderErrors = () => {
        return (
          <ul>
            {errors.map((error, i) => (
              <li key={`error-${i}`} className="board-errors auth-errors">
                {error}
              </li>
            ))}
          </ul>
        );
    }
    
    const update = (field) => {
        return e => setState({
            ...state, [field]: e.currentTarget.value
        })
    }

    const content = () => {
        return (
            <div className="pin-edit-form-container">
                <div className="pin-edit-heading">

                </div>
                <div className="pin-edit-middle">
                    <div className="pin-edit-inputs">
                        <div className="pin-edit-title">

                        </div>
                        <div className="pin-edit-title">

                        </div>
                    </div>
                    <div className="pin-edit-photo">

                    </div>
                </div>
                <div className="pin-edit-buttons">

                </div>
            </div>
        )
    }
    return content()
}

const mSTP = ({ui: {modal: {props}}}) => {
    return {
        pin: props.pin, 
        path: props.path
    }
}

export default connect(mSTP, null)(PinEditForm) 