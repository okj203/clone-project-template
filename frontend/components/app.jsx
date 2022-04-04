import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import ProfileShowContainer from "./profile/profile_show_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>CloneBnB</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/users/:userId" component={ProfileShowContainer}/>
    </Switch>
  </div>
);

export default App;
