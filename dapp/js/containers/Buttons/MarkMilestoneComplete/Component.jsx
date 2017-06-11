import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCompleteMilestone = (event) => {
        event.stopPropagation();
        props.onCompleteMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.action
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
    onCompleteMilestone: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestoneID: PropTypes.number.isRequired,
    action: PropTypes.array.isRequired,
};
