import { combineReducers } from "redux";
import web3 from "./web3";
import givethDirectory from "./givethdirectory";
import { reducer as formReducer } from "redux-form";

const todoApp = combineReducers({
    formReducer,
    web3,
    givethDirectory,
});

export default todoApp;
