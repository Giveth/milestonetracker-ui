import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleRejectCompletedMilestone = (event) => {
        event.stopPropagation();
        props.onRejectCompletedMilestone(
            props.milestoneTrackerAddress, props.milestoneID, props.action
        );
    };
    return (
        <MenuItem
          bsStyle="danger"
          onClick={ handleRejectCompletedMilestone }
        >
            Reject Completed
        </MenuItem>
    );
}

Component.propTypes = {
    onRejectCompletedMilestone: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestoneID: PropTypes.number.isRequired,
    action: PropTypes.array.isRequired,
};
