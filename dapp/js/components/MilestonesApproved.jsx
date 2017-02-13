/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";

// import { Panel, DropdownButton, ButtonToolbar, MenuItem } from "react-bootstrap";
// import { ButtonCollectPayment, ButtonMarkMilestoneComplete, RejectCompletedMilestone,
//          ApproveCompletedMilestone } from "../containers/Buttons";
import MilestoneApproved from "./MilestoneApproved";

export default function MilestonesApproved(props) {
    let content = "";

    if (props.milestones) {
        let milestones = [];
        for (let i = 0; i < props.milestones.length; ++ i) {
            /* <ButtonGroup bsSize="xsmall">
                <ApproveCompletedMilestone
                  milestoneID={i}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  reviewerAddress={props.milestones[ i ].reviewer}
                />
                <RejectCompletedMilestone
                  milestoneID={i}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  reviewerAddress={props.milestones[ i ].reviewer}
                />
                <ButtonMarkMilestoneComplete
                  milestoneID={i}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  fromAddress={props.milestones[ i ].milestoneLeadLink}
                />
                <ButtonCollectPayment
                  vaultAddress={ props.vaultAddress }
                />
            </ButtonGroup>*/
            milestones.push(
                <MilestoneApproved
                  key={ i }
                  title={ props.milestones[ i ].payDescription }
                  description={ props.milestones[ i ].description }
                  url={ props.milestones[ i ].url }
                  maxCompletionDate={ props.milestones[ i ].maxCompletionDate }
                  minCompletionDate={ props.milestones[ i ].minCompletionDate }
                  milestoneLeadLink={ props.milestones[ i ].milestoneLeadLink }
                  payRecipient={ props.milestones[ i ].payRecipient }
                  reviewer={ props.milestones[ i ].reviewer }
                  reviewTime={ props.milestones[ i ].reviewTime }
                  paymentSource={ props.milestones[ i ].paymentSource }
                  status={ props.milestones[ i ].status }
                  doneTime={ props.milestones[ i ].doneTime }
                  payDescription={ props.milestones[ i ].payDescription }
                  index={ i }
                  milestoneTrackerAddress={ props.milestoneTrackerAddress }
                  vaultAddress={ props.vaultAddress }
                />
                );
        }
        content = (
            <div>
                <h2>{ props.header }</h2>
                { milestones }

                { props.children }
            </div>);
    }

    return (
        <div>
            {content}
        </div>
    );
}

MilestonesApproved.propTypes = {
    approved: React.PropTypes.bool,
    milestones: React.PropTypes.array,
    header: React.PropTypes.string.isRequired,
    vaultAddress: React.PropTypes.string.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};
