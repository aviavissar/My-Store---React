import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/component.DashboardPage/component.DashboardPage';
import Cart from '../components/component.cart/component.cart';
import NotFoundPage from '../components/component.NotFoundPage/NotFoundPage';

export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} exact={true} />
        <Route path="/cart" component={Cart} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
