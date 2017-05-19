import React from "react";

import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { App } from "./components";
import {
    PageCampaigns, PageAbout, PageCampaign, PageCampaignDetails, PageCampaignMilestones,
    PageCampaignVault, PageMyAccount/* , PageHome */, CampaignDeployer,
} from "./containers/Pages";
// import Web3Info from "./containers/Web3Info";

const Routes = () =>
    <Router history={hashHistory}>
        <Route path="/" component={ App }>
            <IndexRoute component={ PageCampaigns } />

            <Route path="/myaccount" component={ PageMyAccount } />
            <Route path="/campaigndeployer" component={ CampaignDeployer } />
            <Route path="/about" component={ PageAbout } />
            <Route path="/campaigns" component={ PageCampaigns } />
            <Route path="/campaigns/:campaignId" component={ PageCampaign }>
                <IndexRoute component={ PageCampaignDetails } />

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
