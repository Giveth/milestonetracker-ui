import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onUnproposeMilestones(props.milestoneTrackerAddress, props.action);
    };
    return (
        <Button bsStyle="danger" onClick={ handleProposeMilestones }>Reject</Button>
    );
}

Component.propTypes = {
    onUnproposeMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    action: React.PropTypes.array.isRequired,
};
