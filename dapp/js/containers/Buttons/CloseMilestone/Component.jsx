import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleCancelMilestone = (event) => {
        event.stopPropagation();
        props.cancelMilestone(
            props.milestoneTrackerAddress, props.index
        );
    };
    return (
        <Button bsStyle="danger" onClick={ handleCancelMilestone }>x</Button>
    );
}

Component.propTypes = {
    cancelMilestone: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
};
