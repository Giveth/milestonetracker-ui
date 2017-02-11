import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleCollectPayment = (event) => {
        event.stopPropagation();
        props.onCollectPayment(
            props.vaultAddress
        );
    };
    return (
        <Button bsStyle="success" onClick={ handleCollectPayment }>Collect</Button>
    );
}

Component.propTypes = {
    onCollectPayment: React.PropTypes.func.isRequired,
    vaultAddress: React.PropTypes.string.isRequired,
};
