import React from "react";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { App } from "./components";
import {
    PageCampaigns, PageAbout, PageCampaign, PageCampaignDetails, PageCampaignMilestones,
    PageCampaignVault, PageMyAccount, PageHome,
} from "./containers/Pages";
import Web3Info from "./containers/Web3Info";

const Routes = () =>
    <Router history={hashHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PageHome } />

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
                <Route
                  path="/campaigns/:campaignId/vault"
                  component={ PageCampaignVault }
                />
            </Route>
        </Route>
    </Router>;

export default Routes;
