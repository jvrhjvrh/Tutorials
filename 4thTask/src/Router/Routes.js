import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import NewUser from './../Containers/NewUser';
import UsersContainer from '../Containers/UsersContainer';
import Home from './../Pages/Home';

const newHistory = createBrowserHistory();

const Routes = () => (
  <Router history = {newHistory}>
    <Switch>
      <Route exact path={'/user/:userId'} component={UsersContainer}/>
      <Route exact path={'/new-user'} component={NewUser}/>
      <Route path={''} component={Home} />
    </Switch>
  </Router>
);

export default Routes;