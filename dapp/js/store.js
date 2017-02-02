import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(
    reducer,
    middleware,
);

export default store;
