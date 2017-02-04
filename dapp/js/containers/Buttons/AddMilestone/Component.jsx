import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleAddMilestone = () => {
        props.onAddMilestone(
            props.milestoneTrackerAddress
        );
    };
    return (
        <Button onClick={ handleAddMilestone }>Add Milestone</Button>
    );
}

Component.propTypes = {
    onAddMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};
