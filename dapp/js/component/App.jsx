import React from "react";
import Web3ErrorPopup from "../containers/Web3ErrorPopup";
import Web3TransactionPopoup from "./Web3TransactionPopoup";
import Web3LastTransactions from "./Web3LastTransactions";
import Web3Info from "../containers/Web3Info";

export default function App() {
    return (
        <div className="app">
            <Web3ErrorPopup />
            <Web3TransactionPopoup />
            <Web3LastTransactions />
            <Web3Info />
        </div>
    );
}
