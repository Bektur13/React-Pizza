import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filters from './reducers/filters';
import cart from './reducers/cart';
import pizzas from './reducers/pizzas';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  filters,
  cart,
  pizzas,
});

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
