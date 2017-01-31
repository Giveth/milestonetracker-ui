import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { web3, givethDirectory } from "./blockchain";
import Web3monitor from "./lib/Web3monitor";
import { newWeb3State, newGivethDirectoryState } from "./actions";
import thunk from "redux-thunk";
import Routes from "./routes";

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware),
);
const web3monitor = new Web3monitor(web3);
web3monitor.on("newState", (state) => {
    store.dispatch(newWeb3State(state));
    givethDirectory.getState((err, givethDirectoryState) => {
        if (err) {
            web3monitor.reset();
            return;
        }
        store.dispatch(newGivethDirectoryState(givethDirectoryState));
    });
});

render(
    <Provider store={store}>
        <Routes />
    </Provider>
    ,
    document.getElementById("root")
);
