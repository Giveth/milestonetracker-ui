import React from "react";
import { Panel } from "react-bootstrap";
import CampaignDetails from "../../../components/CampaignDetails";
import { domain } from "../../../blockchain";

export default function Component(props) {
    let content = "";
    const id = props.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const currentCampaign = props.givethDirectoryState.campaigns[ id ];

        content = (
            <Panel>
                <CampaignDetails
                  campaign={currentCampaign.token.controller}
                  url={ currentCampaign.url }
                  name={ currentCampaign.name }
                  description={ currentCampaign.description }
                  status={ currentCampaign.status }
                  tokenAddress={ currentCampaign.tokenAddress }
                  vaultAddress={ currentCampaign.vaultAddress }
                  milestoneTrackerAddress={ currentCampaign.milestoneTrackerAddress }
                  milestones={currentCampaign.milestoneTracker.milestones}
                  token={currentCampaign.token}
                  domain={domain}
                />
            </Panel>
        );
    }

    return (
        <div>
            { content }
        </div>
    );
}

Component.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
};
