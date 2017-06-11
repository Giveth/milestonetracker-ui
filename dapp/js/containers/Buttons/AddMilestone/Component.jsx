import React from "react";
import PropTypes from "prop-types";
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
    onAddMilestone: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
};
