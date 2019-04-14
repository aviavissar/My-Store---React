import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProducts } from './actions/products';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/component.loadingPage/component.LoadingPage'

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

store.dispatch(startSetProducts()).then(() => {
  renderApp();
  if (history.location.pathname === '/') {
    history.push('/dashboard');
  }
});

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === '/') {
//         history.push('/dashboard');
//       }
//     });
//   } else {
//     history.push('/');
//     store.dispatch(logout());
//    renderApp();
   
//   }
// });
