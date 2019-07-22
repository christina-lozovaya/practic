import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {};

const logger = createLogger({
  collapsed: true,
  diff: true
});

let middleware;

/* global __DEV__ */
if (__DEV__) {
  middleware = [thunk, logger];
} else {
  middleware = [thunk];
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
