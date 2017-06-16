/**
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { SplitButton, Button } from "react-bootstrap";
import { ButtonCollectPayment, ButtonMarkMilestoneComplete, RejectCompletedMilestone,
         ApproveCompletedMilestone, CancelMilestone, ArbitrateApproveCompletedMilestone,
     } from "../containers/Buttons";

const MilestoneButtons = (props) => {
    const buttons = [];
    Object.keys(props.actions).forEach((propName) => {
        if (props.actions[ propName ].length < 1) {
            return;
        }
        switch (propName) {
        case "markMilestoneComplete":
            buttons.push(
                <ButtonMarkMilestoneComplete
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "collectMilestone":
            buttons.push(
                <ButtonCollectPayment
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "approveCompletedMilestone":
            buttons.push(
                <ApproveCompletedMilestone
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "rejectMilestone":
            buttons.push(
                <RejectCompletedMilestone
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "arbitrateApproveMilestone":
            buttons.push(
                <ArbitrateApproveCompletedMilestone
                  key={propName}
                  milestoneID={props.milestoneID}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.actions[ propName ]}
                />,
            );
            break;

        case "cancelMilestone":
            buttons.push(
                <CancelMilestone
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

    return (
        buttons.length ? (
            <SplitButton
              bsSize="xsmall"
              title={props.status}
              id={`milestone_${ props.milestoneID }_actions`}
            >
                { buttons }
            </SplitButton>
        )
        :
            <Button
              bsSize="xsmall"
              id={`milestone_${ props.milestoneID }_actions`}
            >
                { props.status }
            </Button>
    );
};

MilestoneButtons.propTypes = {
    // actions: PropTypes.object.isRequired,
    milestoneID: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
};

export default MilestoneButtons;
