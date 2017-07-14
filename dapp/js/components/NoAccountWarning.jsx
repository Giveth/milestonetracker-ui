import React from "react";
import { Alert } from "react-bootstrap";
import { web3 } from "../blockchain";

function NoAccountWarning() {
    const style = {
        bottom: "0px",
        textAlign: "center",
        position: "fixed",
    };

    // Some accounts
    if (web3.eth.accounts.length > 0) return null;

    return (
        <Alert bsStyle="danger" style={style}>
            <h3>No accounts found. Please check you have unlocked your MetaMask vault
                and refresh the page.</h3>
        </Alert>
    );
}

export default NoAccountWarning;
