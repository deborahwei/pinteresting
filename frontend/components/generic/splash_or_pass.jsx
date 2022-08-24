import React from "react";
import { connect } from "react-redux";
import SplashContainer from "../splash/splash"
import HomepageContainer from '../pins/homepage'

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

function SplashOrPass({ loggedIn }){
    return (
        <div>
            {loggedIn ? <HomepageContainer/> : <SplashContainer/> }
        </div>
    )
}

export default connect(mSTP)(SplashOrPass);