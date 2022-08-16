import React, { useEffect, useState } from 'react'
import signup_form_container from '../session_form/signup_form_container'
import { connect } from 'react-redux'
import SplashPage from './splash_page'
import { splashInfo } from './fetch_splash_info'

const Splash = (props) => {

    const { currentUser } = props

    const [currentPage, setCurrentPage] = useState(0)

    useEffect( () => {
        const interval = setInterval(() => {
            setCurrentPage( (prevPage) => prevPage+1 )
        }, 6000);

        return () => clearInterval(interval)
    }, [])

    const splashPage = () => (
        <div className='splash-container'>
            <div className='splash-page-container' >
                <div className='splash-text'>
                    <h1> Get your next</h1>
                </div>
                <div className="splash-page-carousel">
                    {
                        splashInfo.map( (page, i) => <SplashPage title={page.title}
                                                                photoUrls = {page.photoUrls} 
                                                                key={i}
                                                                shouldShow={currentPage % 4 === i}
                                                                shouldLeave={(currentPage - 1) % 4 === i}
                                                                /> )
                    }
                </div>
            </div>
        </div>
    )

    const noSplash = () => (
        ""
    )

    return currentUser ? noSplash() : splashPage()

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
