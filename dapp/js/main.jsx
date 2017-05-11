import "babel-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import "../static/style.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { web3, givethDirectory } from "./blockchain";
import Web3monitor from "./lib/Web3monitor";
import { newWeb3State, newGivethDirectoryState } from "./actions";
import Routes from "./routes";
import store from "./store";

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

// Render the dapp
render(
    <Provider store={store}>
        <Routes />
    </Provider>
    ,
    document.getElementById("root")
);
