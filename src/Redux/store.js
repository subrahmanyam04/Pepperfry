import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import crdentialReducers from '../Redux/Reducer/crdentialReducers';


const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}


const store = createStore(crdentialReducers, applyMiddleware(...middleware));
const abc = store.getState()
console.log('sdfgd',abc)

export default store;