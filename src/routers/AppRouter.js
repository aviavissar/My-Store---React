import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import Login from '../components/login';
import PrivatRoute from './PrivatRoute';



export const history=creatHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
      <Route path="/" component={Login} exact={true} />
        <PrivatRoute path="/dashboard" component={ExpenseDashboardPage}  />
        <PrivatRoute path="/create" component={AddExpensePage} />
        <PrivatRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
