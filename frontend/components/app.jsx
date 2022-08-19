import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';
  
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav.jsx'
import ModalContainer from './modal/modal'
import SplashContainer from './splash/splash'
import DiscoverPinsContainer from './pins/pin_index';
import UserShowContainer from './users/user_show';
import UserShowSavedContainer from './users/user_show_saved';
import UserShowCreatedContainer from './users/user_show_created';
import BoardShowContainer from './boards/board_show'

const App = () => (
    <div>
      <header>
        <NavContainer/>
        <ModalContainer/>
      </header>
        <ProtectedRoute path="/users/:username/boards/:boardName" component={BoardShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/saved" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/created" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/saved" component={UserShowSavedContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/created" component={UserShowCreatedContainer}></ProtectedRoute>
        <ProtectedRoute exact path="/" component={DiscoverPinsContainer} />
        <AuthRoute exact path="/" component={SplashContainer}/>  
    </div>
)

export default App 