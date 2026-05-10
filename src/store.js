// 







import { applyMiddleware, createStore, compose } from 'redux';
import { promiseMiddleware } from './reduxMiddleware';
import reducer from './reducer';

// Use Redux's built-in compose with devtools support
const composeEnhancers = 
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
  compose;

const getMiddleware = () => {
  return applyMiddleware(promiseMiddleware);
};

export const store = createStore(
  reducer, 
  composeEnhancers(getMiddleware())
);