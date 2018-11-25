import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import Login from '../components/login';
import PrivatRoute from './PrivatRoute';



export const history=createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
        <PrivatRoute path="/dashboard" component={ExpenseDashboardPage}  />
        <PrivatRoute path="/create" component={AddExpensePage} />
        <PrivatRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
