import React from "react";
import { Button } from "react-bootstrap";

export default function DeployContract(props) {
    return (
        <Button onClick={props.handleOnClick}>Deploy</Button>
    );
}

DeployContract.propTypes = {
    handleOnClick: React.PropTypes.func.isRequired,
};
