import React from "react";
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
        <Button bsStyle="success" onClick={ handleProposeMilestones }>Accept</Button>
    );
}

Component.propTypes = {
    onAcceptMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    proposalHash: React.PropTypes.string.isRequired,
    action: React.PropTypes.array.isRequired,
};
