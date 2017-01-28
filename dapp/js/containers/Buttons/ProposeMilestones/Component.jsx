import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onProposeMilestones(
            props.milestoneTrackerAddress, props.milestones
        );
    };
    return (
        <Button onClick={ handleProposeMilestones }>Propose Milestones</Button>
    );
}

Component.propTypes = {
    onProposeMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestones: React.PropTypes.array.isRequired,
};
