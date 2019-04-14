import { createStore, combineReducers ,applyMiddleware, compose} from 'redux';
import productsReducer from '../reducers/products';
import cartProductsReducer from '../reducers/cartProducts';
//import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
    //  filters: filtersReducer,
      cartProducts: cartProductsReducer,
     
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
