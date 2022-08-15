import React, { useRef } from 'react'
import signup_form_container from '../session_form/signup_form_container'
import { connect } from 'react-redux'
import SplashPage from './splash_page'
import { splashInfo } from './fetch_splash_info'

const Splash = (props) => {

    const { currentUser } = props
    const pageRef = useRef(null)

    const transitionPages = () => {
        
    }

    const setPagesInterval = () => {
        const timerId = setInterval(transitionPages, 4000)
    }

    return (
        <div className='splash-container'>
            <div className='splash-text-container' >Get your next</div>
            { splashInfo.map( (page, i) => <SplashPage title={page.title} photoUrls = {page.photoUrls} key={i} /> )
            }
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
    }
}

export default connect(mSTP, mDTP)(Splash)
