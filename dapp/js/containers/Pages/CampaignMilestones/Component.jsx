import React from "react";
// import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";
import CampaignMilestones from "../../../components/CampaignMilestones";
import { domain } from "../../../blockchain";

export default function Component(props) {
    if (props.campaign.milestonesTracker) {
        return (
            <Panel>
                <CampaignMilestones
                  recipient={props.campaign.milestonesTracker.recipient}
                  donor={props.campaign.milestonesTracker.donor}
                  arbitrator={props.campaign.milestonesTracker.arbitrator}
                  changingMilestones={props.campaign.milestonesTracker.changingMilestones}
                  campaignCanceled={props.campaign.milestonesTracker.campaignCanceled}
                  milestones={props.campaign.milestonesTracker.milestones}
                  milestoneTrackerAddress={props.campaign.campaign.milestoneTrackerAddress}
                  proposedMilestonesHash={props.campaign.milestonesTracker.proposedMilestonesHash}
                  proposedMilestones={props.campaign.milestonesTracker.proposedMilestones}
                  newMilestones={props.formReducer[ props.campaign.milestoneTrackerAddress ]}
                  vaultAddress={props.campaign.vaultAddress}
                  actions={props.campaign.milestonesTracker.actions}
                  domain={domain}
                />
            </Panel>
        );
    }
    return <div />;
}

Component.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
    // params: PropTypes.object.isRequired,
    // formReducer: PropTypes.object.isRequired,
};
