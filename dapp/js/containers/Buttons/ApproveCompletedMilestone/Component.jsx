import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleApproveCompletedMilestone = (event) => {
        event.stopPropagation();
        props.onCompleteMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.reviewerAddress
        );
    };
    return (
        <MenuItem
          onClick={ handleApproveCompletedMilestone }
        >
            Approve Completed
        </MenuItem>
    );
}

Component.propTypes = {
    onCompleteMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    reviewerAddress: React.PropTypes.string.isRequired,
};
