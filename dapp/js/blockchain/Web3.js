import Web3 from "web3";

let w3;
if ((window) && (window.web3)) {
    w3 = new Web3(window.web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    w3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

if (!w3.isConnected()) {
    w3 = new Web3(new Web3.providers.HttpProvider("https://giveth.psdev.io:8545"));
}
const web3 = w3;

export default web3;
