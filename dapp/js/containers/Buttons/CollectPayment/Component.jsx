import React from "react";
import PropTypes from "prop-types";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCollectPayment = (event) => {
        event.stopPropagation();
        props.onCollectPayment(props.milestoneTrackerAddress, props.milestoneID, props.action);
    };
    return (
        <MenuItem onClick={handleCollectPayment}>Collect</MenuItem>
    );
}

Component.propTypes = {
    onCollectPayment: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestoneID: PropTypes.number.isRequired,
    // action: PropTypes.array.isRequired,
};
