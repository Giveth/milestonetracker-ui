/* eslint-disable */
import Web3 from "web3";
import MilestoneTracker from "milestonetracker";
import GivethDirectory from "givethdirectory";

let web3;
if ((window) && (window.web3)) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

if (!web3.isConnected()) {
    web3 = new Web3(new Web3.providers.HttpProvider("https://giveth.psdev.io:8545"));
}

//MAIN
const givethDirectory = new GivethDirectory(web3, "0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b");
//ROPSTEN
//const givethDirectory = new GivethDirectory(web3, "0x53fc022DD190F0b37A5501FeE92171Ed1C7CD4Eb");
//TESTRPC
//const givethDirectory = new GivethDirectory(web3, "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab");

let domain = '';
const networks = {
    1: 'Main',
    2: 'Morden',
    3: 'Ropsten',
    4: 'Testrpc'
};

web3.version.getNetwork((e, result) => {
    let currentNetwork = result < 4 ? networks[result] : networks[4];
    domain = currentNetwork == 'Main' ? 'https://etherscan.io/' : currentNetwork == 'Ropsten' ? 'https://ropsten.etherscan.io/' : '';
});

export { web3, MilestoneTracker, givethDirectory, domain };
