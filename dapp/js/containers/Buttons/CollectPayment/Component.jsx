import React from "react";
import { MenuItem } from "react-bootstrap";

export default function Component(props) {
    const handleCollectPayment = (event) => {
        event.stopPropagation();
        props.onCollectPayment(
            props.vaultAddress
        );
    };
    return (
        <MenuItem onClick={ handleCollectPayment }>Collect</MenuItem>
    );
}

Component.propTypes = {
    onCollectPayment: React.PropTypes.func.isRequired,
    vaultAddress: React.PropTypes.string.isRequired,
};
