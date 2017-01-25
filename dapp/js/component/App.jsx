import React from "react";
import Web3ErrorPopup from "../containers/Web3ErrorPopup";
import Web3TransactionPopoup from "./Web3TransactionPopoup";
import Web3LastTransactions from "./Web3LastTransactions";
import Web3Info from "../containers/Web3Info";
import GivethDirectory from "../containers/GivethDirectory";

import { Tab, Tabs } from "react-toolbox";

function App() {
    let tabIndex = 1;

    let handleTabChange = (index) => {
        this.tabIndex = index;
    };

    return (
        <div className="app">
            <Web3ErrorPopup />
            <Web3TransactionPopoup />
            <Web3LastTransactions />
            <Web3Info />
            <GivethDirectory />

            <Tabs index={ tabIndex } onChange={ handleTabChange }>
                <Tab label="Primary"><small>Primary content</small></Tab>
                <Tab label="Secondary"><small>Secondary content</small></Tab>
                <Tab label="Third" disabled><small>Disabled content</small></Tab>
                <Tab label="Fourth" hidden><small>Fourth content hidden</small></Tab>
                <Tab label="Fifth"><small>Fifth content</small></Tab>
            </Tabs>
        </div>
    );
}

export default App;
