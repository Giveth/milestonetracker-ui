import React from "react";
import { Panel } from "react-bootstrap";
import CampaignDetails from "../../../components/CampaignDetails";

export default function Component(props) {
    let content = "";
    const id = props.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const currentCampaign = props.givethDirectoryState.campaigns[ id ];

        content = (
            <Panel>
                <CampaignDetails
                  url={ currentCampaign.url }
                  name={ currentCampaign.name }
                  description={ currentCampaign.description }
                  status={ currentCampaign.status }
                  tokenAddress={ currentCampaign.tokenAddress }
                  vaultAddress={ currentCampaign.vaultAddress }
                  milestoneTrackerAddress={ currentCampaign.milestoneTrackerAddress }
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
