import { EventEmitter } from "events";
import async from "async";

export default class extends EventEmitter {
    constructor(web3, listener) {
        super();
        this.web3 = web3;
        if (listener) {
            this.on("newState", listener);
        }
        this.reset();
    }

    // Starts a background monitor to check the sync.
    registerSync(cb) {
        let timeout = null;
        this.syncObj = this.web3.eth.getSyncing((err, sync) => {
            if (err) {
                // If we are still initializing.
                if (timeout !== null) {
                    clearTimeout(timeout);
                    timeout = null;
                    cb(err);
                    return;
                }
                this.reset(err, 5000);
                return;
            }
            if (sync === true) {
                this.st.syncing = true;
                this.st.syncStartingBlock = null;
                this.st.syncCurrentBlock = null;
                this.st.syncHighestBlock = null;
            } else if (sync) {
                this.st.syncStartingBlock = sync.startingBlock;
                this.st.syncCurrentBlock = sync.currentBlock;
                this.st.syncHighestBlock = sync.highestBlock;
            } else {
                this.st.syncing = false;
                this.st.syncStartingBlock = null;
                this.st.syncCurrentBlock = null;
                this.st.syncHighestBlock = null;
            }
            this.updateState();
        });
        // Wait 200ms to see if ther have been some error;
        timeout = setTimeout(() => {
            timeout = null;
            cb();
        }, 200);
    }

    readAccounts(cb) {
        let addresses;
        const accounts = [];
        async.series([
            (cb1) => {
                this.web3.eth.getAccounts((err, _accounts) => {
                    if (err) {
                        cb1(err);
                        return;
                    }
                    addresses = _accounts;
                    cb1();
                });
            },
            (cb1) => {
                async.eachSeries(addresses, (address, cb2) => {
                    this.web3.eth.getBalance(address, (err, balance) => {
                        if (err) {
                            cb1(err);
                            return;
                        }
                        accounts.push({
                            address,
                            balance,
                        });
                        cb2();
                    });
                }, cb1);
            },
            (cb1) => {
                this.st.accounts = accounts;
                cb1();
            },
        ], cb);
    }

    connect(cb) {
/*        this.blockFilter = this.web3.eth.filter("latest", () => {
            this._invalidateBlock();
        }); */
        this.checkConnectionInterval = setInterval(() => {
            this.web3.eth.getBlockNumber((err, bn) => {
                if (err) {
                    this.reset(err, 5000);
                    return;
                }
                if (bn !== this.st.block.number) {
                    this.invalidateBlock();
                }
            });
        }, 1000);

        async.series([
            (cb1) => {
                this.registerSync(cb1);
            },
            (cb1) => {
                this.readAccounts(cb1);
            },
            (cb1) => {
                this.invalidateBlock();
                cb1();
            },
        ], cb);
    }

    reset(err = null, retry = 1) {
        this.st = {
            accounts: [],
            block: {},
            connected: false,
            error: err,
        };
        if (this.syncObj) {
            this.syncObj.stopWatching();
            this.syncObj = null;
        }
        if (this.checkConnectionInterval) {
            clearInterval(this.checkConnectionInterval);
            this.checkConnectionInterval = null;
        }
        if (!this.retrying) {
            this.retrying = true;
            setTimeout(() => {
                this.connect((errConnect) => {
                    this.retrying = false;
                    if (errConnect) {
                        this.reset(errConnect, 10000);
                        return;
                    }
                    this.st.connected = true;
                    this.updateState();
                });
            }, retry);
        }
        this.updateState();
    }

    processBlock(cb) {
        async.series([
            (cb1) => {
                this.web3.eth.getBlock("latest", true, (err, block) => {
                    if (err) {
                        this.reset(err, 5000);
                        return;
                    }
                    this.st.block = block;
                    cb1();
                });
            },
            (cb1) => {
                this.readAccounts(cb1);
            },
        ], cb);
    }

    invalidateBlock() {
        this.invalidBlock = true;
        if (!this.processingBlock) {
            this.invalidBlock = false;
            this.processingBlock = true;
            this.processBlock(() => {
                this.processingBlock = false;
                if (this.invalidBlock) {
                    this.invalidateBlock();
                } else {
                    this.updateState();
                }
            });
        }
    }

    updateState() {
        this.emit("newState", this.st);
    }

}
