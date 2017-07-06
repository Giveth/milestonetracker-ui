/**
 *
 */

import React from "react";
import PropTypes from "prop-types";

import * as Buttons from "../containers/Buttons/Milestone";

const MilestoneButtons = (props) => {
    const buttons = [];
    Object.keys(props.actions).forEach((propName) => {
        switch (propName) {
        case "markMilestoneComplete":
            buttons.push(
                <Buttons.MarkCompleted
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "collectMilestone":
            buttons.push(
                <Buttons.Collect
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "approveCompletedMilestone":
            buttons.push(
                <Buttons.ApproveCompleted
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "rejectMilestone":
            buttons.push(
                <Buttons.RejectCompleted
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "arbitrateApproveMilestone":
            buttons.push(
                <Buttons.ArbitrateApproveCompleted
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "cancelMilestone":
            buttons.push(
                <Buttons.Cancel
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;
        default:
            break;
        }
    });

    return <div>{buttons}</div>;
};

MilestoneButtons.propTypes = {
    actions: PropTypes.shape({
        markMilestoneComplete: PropTypes.arrayOf(PropTypes.shape()),
    }),
    // milestoneTrackerAddress: PropTypes.string.isRequired,
    // milestoneID: PropTypes.number.isRequired,
};

MilestoneButtons.defaultProps = {
    actions: {},
};

export default MilestoneButtons;
