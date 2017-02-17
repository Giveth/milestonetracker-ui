import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCancelMilestone = (event) => {
        event.stopPropagation();
        props.onCancelMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.action
        );
    };
    return (
        <MenuItem
          onClick={ handleCancelMilestone }
        >
            Cancel
        </MenuItem>
    );
}

Component.propTypes = {
    onCancelMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    action: React.PropTypes.array.isRequired,
};
