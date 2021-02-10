import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../rootReducer/root.reducer';

const middleWareAll = [
  logger,
  thunk
];

export const STORE = createStore(rootReducer, applyMiddleware(...middleWareAll));