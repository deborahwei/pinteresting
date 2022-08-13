import React from 'react';
import {
    Route,
    Switch,
    Link
  } from 'react-router-dom';
  
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav.jsx'
import ModalContainer from './modal/modal'

const App = () => (
    <div>
    <header>
      <NavContainer/>
      <ModalContainer/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    </div>
)

export default App 