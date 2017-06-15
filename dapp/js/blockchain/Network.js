import GivethDirectory from "givethdirectory";
import web3 from "./Web3";

const networks = {
    1: {
        title: "Main",
        directory: new GivethDirectory(web3, "0x30e1a463ecf25dbba2f83cb3e4b10045f888e55b"),
        etherscan: "https://etherscan.io/",
    },
    2: {
        title: "Morden",
        directory: new GivethDirectory(web3, "0x0"), // NOTE: Morden does not have giveth directory deployed
        etherscan: "",
    },
    3: {
        title: "Ropsten",
        directory: new GivethDirectory(web3, "0x53fc022DD190F0b37A5501FeE92171Ed1C7CD4Eb"),
        etherscan: "https://ropsten.etherscan.io/",
    },
    4: {
        title: "Testrpc",
        directory: new GivethDirectory(web3, "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab"),
        etherscan: "",
    },
};

const nt = web3.version.network;
const ntID = nt < 4 ? nt : 4;

// FIXME: Remake this to asynchronous action with listener on network change.

 // eslint-disable-next-line import/no-mutable-exports
const network = networks[ ntID ];
// eslint-disable-next-line import/no-mutable-exports
const domain = network.etherscan;

// web3.version.getNetwork((error, networkID) => {
//     network = networkID < 4 ? networks[ networkID ] : networks[ 4 ];
//     domain = network.etherscan;
//     console.log(`Connected to the ${ network.title } network.
//      Campaign Tracker is at ${ network.directory.contract.address }`);
// });

export { network, domain };
