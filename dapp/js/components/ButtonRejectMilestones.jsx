import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function ButtonRejectMilestones(props) {
    const handleProposeMilestones = () => {
        props.onUnproposeMilestones(props.milestoneTrackerAddress, props.action);
    };
    return (
        <Button bsStyle="danger" onClick={handleProposeMilestones}>Reject</Button>
    );
}

ButtonRejectMilestones.propTypes = {
    onUnproposeMilestones: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    action: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
    })).isRequired,
};
