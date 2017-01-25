import { combineReducers } from "redux";
import web3 from "./web3";
import givethDirectory from "./givethdirectory";

const todoApp = combineReducers({
    web3,
    givethDirectory,
});

export default todoApp;
