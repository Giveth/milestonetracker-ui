import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onUnproposeMilestones(props.milestoneTrackerAddress);
    };
    return (
        <Button onClick={ handleProposeMilestones }>Unpropose Milestones</Button>
    );
}

Component.propTypes = {
    onUnproposeMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};
