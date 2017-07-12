import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { App } from "./components";
import {
    PageCampaigns, PageAbout, PageCampaign, PageMyAccount, CampaignDeployer,
} from "./containers/Pages";
// import Web3Info from "./containers/Web3Info";

const Routes = () => (
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={PageCampaigns} />

                <Route path="/myaccount" component={PageMyAccount} />
                <Route path="/campaigndeployer" component={CampaignDeployer} />
                <Route path="/about" component={PageAbout} />
                <Route exact path="/campaigns" component={PageCampaigns} />
                <Route exact path="/campaigns/:campaignId" component={PageCampaign} />
            </Switch>
        </App>
    </Router>);

export default Routes;
