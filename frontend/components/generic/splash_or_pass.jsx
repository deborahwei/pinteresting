import React from "react";
import { connect } from "react-redux";
import SplashContainer from "../splash/splash"
import DiscoverPinsContainer from "../splash/splash_pins";

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

function SplashOrPass({ loggedIn }){
    return (
        <div>
            {loggedIn ? <DiscoverPinsContainer/> : <SplashContainer/> }
        </div>
    )
}

export default connect(mSTP)(SplashOrPass);