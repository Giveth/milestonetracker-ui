import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleCancelMilestone = (event) => {
        event.stopPropagation();
        props.cancelMilestone(
            props.milestoneTrackerAddress, props.index,
        );
    };
    return (
        <Button bsStyle="danger" onClick={handleCancelMilestone}>x</Button>
    );
}

Component.propTypes = {
    cancelMilestone: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};
