import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Web3 from "web3";
import Web3monitor from "./lib/Web3monitor";
import { newWeb3State } from "./actions";

const store = createStore(reducer);

let web3;
if ((window) && (window.web3)) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const web3monitor = new Web3monitor(web3);
web3monitor.on("newState", (state) => {
    store.dispatch(newWeb3State(state));
});

import App from "./component/App";

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
);
