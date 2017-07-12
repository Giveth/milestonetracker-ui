import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducer from "./reducers";
import initialState from "./initialState";

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(
    reducer,
    initialState(),
    middleware,
);

export default store;
