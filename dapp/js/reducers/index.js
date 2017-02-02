import { combineReducers } from "redux";
import web3 from "./web3";
import givethDirectory from "./givethdirectory";
import formReducer from "./formReducer";

const reducers = combineReducers({
    formReducer,
    web3,
    givethDirectory,
});

export default reducers;
