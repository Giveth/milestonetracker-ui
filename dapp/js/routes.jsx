import React from "react";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { App } from "./components";
import PageCampaigns from "./containers/Pages/Campaigns";
import PageAbout from "./containers/Pages/About";
import PageCampaign from "./containers/Pages/Campaign";
import PageCampaignDetails from "./containers/Pages/CampaignDetails";
import PageCampaignMilestones from "./containers/Pages/CampaignMilestones";
import PageMyAccount from "./containers/Pages/MyAccount";
import Web3Info from "./containers/Web3Info";
import GivethDirectory from "./containers/Pages/GivethDirectory";

const Routes = () =>
    <Router history={hashHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ GivethDirectory } />

            <Route path="/myaccount" component={ PageMyAccount } />
            <Route path="/about" component={ PageAbout } />
            <Route path="/campaigns" component={ PageCampaigns } />
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
    </Router>;

export default Routes;
