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

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { App } from "./components";
import AboutPageContainer from "./containers/AboutPageContainer";
import CampaignsContainer from "./containers/CampaignsContainer";
import PageCampaign from "./containers/Pages/Campaign";
import PageCampaignDetails from "./containers/Pages/CampaignDetails";
import PageCampaignMilestones from "./containers/Pages/CampaignMilestones";
import MyAccountContainer from "./containers/MyAccountContainer";
import Web3Info from "./containers/Web3Info";

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
        <Router history={hashHistory}>
            <Route path="/" component={ App }>
                <IndexRoute component={ CampaignsContainer } />

                <Route path="/myaccount" component={ MyAccountContainer } />
                <Route path="/about" component={ AboutPageContainer } />
                <Route path="/campaigns" component={ CampaignsContainer } />
                <Route path="/campaigns/:campaignId" component={ PageCampaign }>
                    <IndexRoute component={ Web3Info } />

                    <Route
                      path="/campaigns/:campaignId/details"
                      component={ PageCampaignDetails }
                    />
                    <Route
                      path="/campaigns/:campaignId/milestones"
                      component={ PageCampaignMilestones }
                    />
                    <Route path="/campaigns/:campaignId/vault" component={ Web3Info } />
                </Route>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById("root")
);
