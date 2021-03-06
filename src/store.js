import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import FilmsReducer from './reducers/FilmsReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(FilmsReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;