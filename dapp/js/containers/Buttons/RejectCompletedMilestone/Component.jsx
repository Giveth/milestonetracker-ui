import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleRejectCompletedMilestone = (event) => {
        event.stopPropagation();
        props.onRejectCompletedMilestone(
            props.milestoneTrackerAddress, props.milestoneID
        );
    };
    return (
        <Button
          bsStyle="danger"
          onClick={ handleRejectCompletedMilestone }
        >
            Reject Completed
        </Button>
    );
}

Component.propTypes = {
    onRejectCompletedMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
};
