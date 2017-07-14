import React from "react";
import { Alert } from "react-bootstrap";
import { web3 } from "../blockchain";

function NoAccountWarning() {
    const style = {
        bottom: "0px",
        textAlign: "center",
        position: "fixed",
        margin: {0},
        left: "50%",
        transform: "translate(-50%, 0%)",
    };

    // Some accounts
    if (web3.eth.accounts.length > 0) return null;

    return (
        <Alert bsStyle="danger" style={style}>
            <p>
                <strong>No Ethereum accounts found.</strong>
                To be able to interact with the Giveth Dapp,
                you have to unlocked your MetaMask vault and refresh the page.
            </p>
        </Alert>
    );
}

export default NoAccountWarning;
