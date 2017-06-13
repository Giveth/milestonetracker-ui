import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onAcceptMilestones(
            props.milestoneTrackerAddress,
            props.proposalHash,
            props.action,
        );
    };
    return (
        <Button bsStyle="success" onClick={handleProposeMilestones}>Accept</Button>
    );
}

Component.propTypes = {
    onAcceptMilestones: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    proposalHash: PropTypes.string.isRequired,
    // action: PropTypes.array.isRequired,
};
