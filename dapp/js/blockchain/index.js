import Web3 from "web3";
import MilestoneTracker from "milestonetracker";
import GivethDirectory from "givethdirectory";

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

const networks = {
    1: {
        title: "Main Network",
        directoryAddress: "0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b",
        etherscan: "https://etherscan.io/",
    },
    2: {
        title: "Morden",
        directoryAddress: "0x0", // NOTE: Morden does not have giveth directory deployed
        etherscan: "",
    },
    3: {
        title: "Ropsten",
        directoryAddress: "0x53fc022DD190F0b37A5501FeE92171Ed1C7CD4Eb",
        etherscan: "https://ropsten.etherscan.io/",
    },
    4: {
        title: "Testrpc",
        directoryAddress: "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
        etherscan: "",
    },
};

 // eslint-disable-next-line import/no-mutable-exports
let givethDirectory = new GivethDirectory(web3, networks[ 1 ].directoryAddress);
// eslint-disable-next-line import/no-mutable-exports
let domain = "";

web3.version.getNetwork((e, result) => {
    const currentNetwork = result < 4 ? networks[ result ] : networks[ 4 ];
    givethDirectory = new GivethDirectory(web3, currentNetwork.directoryAddress);
    domain = currentNetwork.etherscan;
});

export { web3, MilestoneTracker, givethDirectory, domain };
