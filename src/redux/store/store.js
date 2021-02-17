import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../rootReducer/root.reducer";

const middleWareAll = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWareAll));

export default store;
