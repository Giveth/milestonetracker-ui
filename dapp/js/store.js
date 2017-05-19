import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import initialState from "./initialState";

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(
    reducer,
    initialState(),
    middleware,
);

export default store;
