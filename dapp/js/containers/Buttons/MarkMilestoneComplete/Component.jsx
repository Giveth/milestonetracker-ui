import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleCompleteMilestone = (event) => {
        event.stopPropagation();
        props.onCompleteMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.fromAddress
        );
    };
    return (
        <Button
          bsStyle="info"
          onClick={ handleCompleteMilestone }
        >
            Mark Milestone Complete
        </Button>
    );
}

Component.propTypes = {
    onCompleteMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    fromAddress: React.PropTypes.string.isRequired,
};
