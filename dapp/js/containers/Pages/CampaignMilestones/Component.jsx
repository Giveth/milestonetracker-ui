import React from "react";
import { Panel } from "react-bootstrap";
import CampaignMilestones from "../../../components/CampaignMilestones";
import { domain } from "../../../blockchain";

export default function Component(props) {
    let content = "";
    const id = props.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const currentCampaign = props.givethDirectoryState.campaigns[ id ];
        const milestonesTracker = props.givethDirectoryState.campaigns[ id ].milestoneTracker;

        content = (
            <Panel>
                <CampaignMilestones
                  recipient={ milestonesTracker.recipient }
                  donor={ milestonesTracker.donor }
                  arbitrator={ milestonesTracker.arbitrator }
                  changingMilestones={ milestonesTracker.changingMilestones }
                  campaignCanceled={ milestonesTracker.campaignCanceled }
                  milestones={milestonesTracker.milestones}
                  milestoneTrackerAddress={currentCampaign.milestoneTrackerAddress}
                  proposedMilestonesHash={milestonesTracker.proposedMilestonesHash}
                  proposedMilestones={milestonesTracker.proposedMilestones}
                  newMilestones={props.formReducer[ currentCampaign.milestoneTrackerAddress ]}
                  vaultAddress={ currentCampaign.vaultAddress }
                  actions={milestonesTracker.actions}
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
    formReducer: React.PropTypes.object.isRequired,
};
