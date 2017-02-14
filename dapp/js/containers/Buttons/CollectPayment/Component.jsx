import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCollectPayment = (event) => {
        event.stopPropagation();
        props.onCollectPayment(props.milestoneTrackerAddress, props.fromAddress, props.milestoneID);
    };
    return (
        <MenuItem onClick={ handleCollectPayment }>Collect</MenuItem>
    );
}

Component.propTypes = {
    onCollectPayment: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    fromAddress: React.PropTypes.string.isRequired,
    milestoneID: React.PropTypes.number.isRequired,
};
