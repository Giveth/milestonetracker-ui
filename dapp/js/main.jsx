import "babel-polyfill";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "../static/style.css";
import { web3, network } from "./blockchain";
import Web3monitor from "./lib/Web3monitor";
import { newWeb3State, newGivethDirectoryState } from "./actions";
import Routes from "./routes";
import store from "./store";

const web3monitor = new Web3monitor(web3);
web3monitor.on("newState", (state) => {
    store.dispatch(newWeb3State(state));
    network.directory.getState((err, givethDirectoryState) => {
        if (err) {
            console.log("Possible invalid GivethDirectory address?:", err); // eslint-disable-line no-console
            web3monitor.reset(null, 1000);
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
    document.getElementById("root"),
);
