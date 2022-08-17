import React from 'react';
import {
    Route,
    Switch,
    Link
  } from 'react-router-dom';
  
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav.jsx'
import ModalContainer from './modal/modal'
import SplashContainer from './splash/splash'
import DiscoverPinsContainer from './pins/pin_index';
import UserShowContainer from './users/user_show';
import UserShowSavedContainer from './users/user_show_saved';
import UserShowCreatedContainer from './users/user_show_created';

const App = () => (
    <div>
      <header>
        <NavContainer/>
        <ModalContainer/>
      </header>
        <AuthRoute exact path="/" component={SplashContainer}/>  
        <ProtectedRoute path="/users/:userId" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:userId/saved" component={UserShowSavedContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:userId/created" component={UserShowCreatedContainer}></ProtectedRoute>
        <ProtectedRoute exact path="/" component={DiscoverPinsContainer} />
    </div>
)

export default App 