/**
 *
 */

import React from "react";
import PropTypes from "prop-types";

import * as Buttons from "../containers/Buttons/Milestone";

const MilestoneButtons = (props) => {
    const buttons = [];
    Object.keys(props.actions).forEach((actionName) => {
        if (props.actions[ actionName ].length > 0) {
            switch (actionName) {
            case "markMilestoneComplete":
                buttons.push(
                    <Buttons.MarkCompleted
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "collectMilestone":
                buttons.push(
                    <Buttons.Collect
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "approveCompletedMilestone":
                buttons.push(
                    <Buttons.ApproveCompleted
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "rejectMilestone":
                buttons.push(
                    <Buttons.RejectCompleted
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "requestMilestonePayment":
                buttons.push(
                    <Buttons.RequestPayment
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "arbitrateApproveMilestone":
                buttons.push(
                    <Buttons.ArbitrateApproveCompleted
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;

            case "cancelMilestone":
                buttons.push(
                    <Buttons.Cancel
                      key={actionName}
                      milestoneID={props.milestoneID}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.actions[ actionName ]}
                    />,
                );
                break;
            default:
                break;
            }
        }
    });

    return <div>{buttons}</div>;
};

MilestoneButtons.propTypes = {
    actions: PropTypes.shape({
        markMilestoneComplete: PropTypes.arrayOf(PropTypes.shape()),
    }),
};

MilestoneButtons.defaultProps = {
    actions: {},
};

export default MilestoneButtons;
