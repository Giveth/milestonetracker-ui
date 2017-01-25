import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Web3 from "web3";
import { GivethDirectory } from "givethdirectory";
import Web3monitor from "./lib/Web3monitor";
import { newWeb3State, newGivethDirectoryState } from "./actions";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./component/App";
import AboutComponent from "./component/AboutComponent";
import MyAccountComponent from "./component/MyAccountComponent";
import GivethDirectoryContainer from "./containers/GivethDirectoryContainer";
import SingleCampaignContainer from "./containers/SingleCampaignContainer";

const store = createStore(reducer);

let web3;
if ((window) && (window.web3)) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const givethDirectory = new GivethDirectory(web3, "0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b");

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
        <Router history={hashHistory}>
            <Route path="/" component={ App }>
                <IndexRoute component={ GivethDirectoryContainer } />

                <Route path="/myaccount" component={ MyAccountComponent } />
                <Route path="/about" component={ AboutComponent } />
                <Route path="/campaigns" component={ GivethDirectoryContainer } />
                <Route path="/campaigns/:campaignId" component={ SingleCampaignContainer } />
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById("root")
);
