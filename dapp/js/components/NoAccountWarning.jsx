import React from "react";
import { Alert } from "react-bootstrap";
import { web3 } from "../blockchain";

function NoAccountWarning() {
    const unlocked = web3.eth.accounts.length > 0;
    let style = {
        marginTop: "20px",
        textAlign: "center",
    };

    if (unlocked) return null;

    return (
        <Alert bsStyle="danger" style={style}>
            <h4>No accounts found. You may need to unlock you MetaMask vault and refresh the
                page.</h4>
        </Alert>
    );
}

export default NoAccountWarning;
