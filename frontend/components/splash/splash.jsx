import React from 'react'
import signup_form_container from '../session_form/signup_form_container'
import { connect } from 'react-redux'

const Splash = (props) => {

    const { currentUser } = props

    return (
        <div className='splash-container'>
            <div className='splash-text-container'>
                <div className='get-your-next'>
                    Get your next 
                </div>
                <div className='splash-prompt-container'>
                    <div className="snowboarding-words animated">powder portrait</div>
                    {/* div className='sunset-words'>sunset snapshot</div>
                    <div className='pie-words'>piece of pie</div>
                    <div className='interior-words'>interior inspiration</div> */}
                </div>
            </div>
        </div>
    )

}

const mSTP = ({session, entities: { users }}) => {
    return {
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: (formType) => dispatch(openModal(formType)),
    }
}

export default connect(mSTP, mDTP)(Splash)
