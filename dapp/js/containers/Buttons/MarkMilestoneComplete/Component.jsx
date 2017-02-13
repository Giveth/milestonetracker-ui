import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCompleteMilestone = (event) => {
        event.stopPropagation();
        props.onCompleteMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.fromAddress
        );
    };
    return (
        <MenuItem
          onClick={ handleCompleteMilestone }
        >
            Mark Milestone Complete
        </MenuItem>
    );
}

Component.propTypes = {
    onCompleteMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    fromAddress: React.PropTypes.string.isRequired,
};
