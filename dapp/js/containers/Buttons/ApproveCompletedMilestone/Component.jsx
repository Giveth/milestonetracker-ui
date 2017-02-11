import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleApproveCompletedMilestone = (event) => {
        event.stopPropagation();
        props.onCompleteMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.reviewerAddress
        );
    };
    return (
        <Button
          bsStyle="success"
          onClick={ handleApproveCompletedMilestone }
        >
            Approve Completed
        </Button>
    );
}

Component.propTypes = {
    onCompleteMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    reviewerAddress: React.PropTypes.string.isRequired,
};
