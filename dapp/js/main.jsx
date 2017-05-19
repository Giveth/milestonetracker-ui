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
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    store.dispatch(newWeb3State(state));
    givethDirectory.getState((err, givethDirectoryState) => {
        if (err) {
            sleep(10000).then(() => {
                web3monitor.reset();
            });
        } else {
            store.dispatch(newGivethDirectoryState(givethDirectoryState));
        }
    });
});

render(
    <Provider store={store}>
        <Routes />
    </Provider>
    ,
    document.getElementById("root")
);
