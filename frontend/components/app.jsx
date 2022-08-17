import React from 'react';
import {
    Route,
    Switch,
    Link
  } from 'react-router-dom';
  
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav.jsx'
import ModalContainer from './modal/modal'
import SplashContainer from './splash/splash'
import DiscoverPinsContainer from './pins/pin_index';
import UserShowContainer from './users/user_show';

const App = () => (
    <div>
      <header>
        <NavContainer/>
        <ModalContainer/>
      </header>
        <AuthRoute exact path="/" component={SplashContainer}/>  
        <ProtectedRoute path="/users/:userId" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute exact path="/" component={DiscoverPinsContainer} />
    </div>
)

export default App 