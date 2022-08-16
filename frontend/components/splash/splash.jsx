import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SplashPage from './splash_page'
import { splashInfo } from './fetch_splash_info'
import SignupFormContainer from '../session_form/signup_form_container'

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
            <section className='splash-page-container' >
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
            </section>
            <section className="second-page">
                <div className='second-page-background'>
                </div>
                <div className='second-page-background'>

                </div>
                <div className="splash-signup">
                    <SignupFormContainer stationary={true}/>
                </div>
            </section>
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


export default connect(mSTP, null)(Splash)
