import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCollectPayment = (event) => {
        event.stopPropagation();
        props.onCollectPayment(props.milestoneTrackerAddress, props.milestoneID, props.action);
    };
    return (
        <MenuItem onClick={ handleCollectPayment }>Collect</MenuItem>
    );
}

Component.propTypes = {
    onCollectPayment: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
    action: React.PropTypes.array.isRequired,
};
