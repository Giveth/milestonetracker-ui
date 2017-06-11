import React from "react";
import { HashRouter, Route, IndexRoute } from "react-router-dom";
import { App } from "./components";
import {
    PageCampaigns, PageAbout, PageCampaign, PageCampaignDetails, PageCampaignMilestones,
    PageCampaignVault, PageMyAccount, CampaignDeployer,
} from "./containers/Pages";
// import Web3Info from "./containers/Web3Info";

const Routes = () => (
    <HashRouter>
        <Route path="/" component={App}>
            <IndexRoute component={PageCampaigns} />

            <Route path="/myaccount" component={PageMyAccount} />
            <Route path="/campaigndeployer" component={CampaignDeployer} />
            <Route path="/about" component={PageAbout} />
            <Route path="/campaigns" component={PageCampaigns} />
            <Route path="/campaigns/:campaignId" component={PageCampaign}>
                <IndexRoute component={PageCampaignDetails} />

                <Route
                  path="/campaigns/:campaignId/details"
                  component={PageCampaignDetails}
                />
                <Route
                  path="/campaigns/:campaignId/milestones"
                  component={PageCampaignMilestones}
                />
                <Route
                  path="/campaigns/:campaignId/vault"
                  component={PageCampaignVault}
                />
            </Route>
        </Route>
    </HashRouter>);

export default Routes;
