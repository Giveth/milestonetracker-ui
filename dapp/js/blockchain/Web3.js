import Web3 from "web3";

// hack to reduce metamask race conditions
function waitForWeb3Injection(timeout) {
    const now = new Date().getTime();

    while (typeof window.web3 === "undefined" && new Date().getTime() < now + timeout) {
        /* do nothing */
    }
}

waitForWeb3Injection(2000);

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

web3.eth.getTransactionReceiptMined = (txHash, blockLimit = 15) => new Promise(
    (resolve, reject) => {
        web3.eth.getTransactionReceipt(txHash, (err, res) => {
            if (err) {
                reject(err);
                return;
            }

            // tx already mined
            if (res) {
                resolve(res);
                return;
            }

            let blockCounter = blockLimit;
            const listener = web3.eth.filter("latest").watch((blockErr) => {
                if (blockErr) {
                    listener.stopWatching();
                    reject(blockErr);
                    return;
                }

                if (blockCounter <= 0) {
                    listener.stopWatching();
                    console.warn(`${ txHash } not mined in last ${ blockLimit } blocks`); // eslint-disable-line no-console

                    reject("blockLimit reached");
                    return;
                }

                web3.eth.getTransactionReceipt(txHash, (receiptErr, receiptRes) => {
                    blockCounter -= 1;

                    if (receiptRes) {
                        listener.stopWatching();
                        resolve(receiptRes);
                    }
                });
            });
        });
    });

export default web3;
