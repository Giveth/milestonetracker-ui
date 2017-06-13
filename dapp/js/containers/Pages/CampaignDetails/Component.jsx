import React from "react";
import { Panel } from "react-bootstrap";
import CampaignDetails from "../../../components/CampaignDetails";
import { domain } from "../../../blockchain";

const Component = props => (
    <Panel>
        <CampaignDetails
          campaign={props.campaign.token.controller}
          url={props.campaign.url}
          name={props.campaign.name}
          description={props.campaign.description}
          status={props.campaign.status}
          tokenAddress={props.campaign.tokenAddress}
          vaultAddress={props.campaign.vaultAddress}
          milestoneTrackerAddress={props.campaign.milestoneTrackerAddress}
          milestones={props.campaign.milestoneTracker.milestones}
          token={props.campaign.token}
          domain={domain}
        />
    </Panel>
  );

Component.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
    // params: PropTypes.object.isRequired,
};

export default Component;
