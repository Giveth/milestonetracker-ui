import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCancelMilestone = (event) => {
        event.stopPropagation();
        props.onCancelMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.action,
        );
    };
    return (
        <MenuItem
          onClick={handleCancelMilestone}
        >
            Cancel
        </MenuItem>
    );
}

Component.propTypes = {
    onCancelMilestone: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestoneID: PropTypes.number.isRequired,
    // action: PropTypes.array.isRequired,
};
