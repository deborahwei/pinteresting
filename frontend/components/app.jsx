import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';
  
import { ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav.jsx'
import ModalContainer from './modal/modal'
import UserShowContainer from './users/user_show';
import BoardShowContainer from './boards/board_show'
import SplashOrPass from "./generic/splash_or_pass"
import PinShowContainer from './pins/pin_show'
import PinCreateForm from './pins/pin_create_form'
import CategoryHomePage from './search_bar/category_homepage'
import CreatedContainer from './users/user_show_created_container'

const App = () => (
    <div>
      <header>
        <NavContainer/>
        <ModalContainer/>
      </header>
      <Switch>
        <ProtectedRoute exact path="/users/:username/boards/:boardName" component={BoardShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/pin-builder" component={PinCreateForm}></ProtectedRoute>
        <ProtectedRoute path="/pins/:pinId" component={PinShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/created" component={CreatedContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/saved" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/users/:username/" component={UserShowContainer}></ProtectedRoute>
        <ProtectedRoute path="/:category" component={CategoryHomePage}></ProtectedRoute>
        <Route path="/" component={SplashOrPass} />
      </Switch>
    </div>
)

export default App 