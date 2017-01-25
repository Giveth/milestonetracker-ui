import { EventEmitter } from "events";
import async from "async";

export default class extends EventEmitter {
    constructor(web3, listener) {
        super();
        const self = this;
        self.web3 = web3;
        if (listener) {
            self.on("newState", listener);
        }
        self.reset();
    }

    // Starts a background monitor to check the sync.
    _registerSync(cb) {
        const self = this;
        let timeout = null;

        self.syncObj = self.web3.eth.isSyncing((err, sync) => {
            if (err) {
                // If we are still initializing.
                if (timeout !== null) {
                    clearTimeout(timeout);
                    timeout = null;
                    cb(err);
                    return;
                }
                self.reset(err, 5000);
                return;
            }
            if (sync === true) {
                self.st.syncing = true;
                self.st.syncStartingBlock = null;
                self.st.syncCurrentBlock = null;
                self.st.syncHighestBlock = null;
            } else if (sync) {
                self.st.syncStartingBlock = sync.startingBlock;
                self.st.syncCurrentBlock = sync.currentBlock;
                self.st.syncHighestBlock = sync.highestBlock;
            } else {
                self.st.syncing = false;
                self.st.syncStartingBlock = null;
                self.st.syncCurrentBlock = null;
                self.st.syncHighestBlock = null;
            }
            self.updateState();
        });
        // Wait 200ms to see if ther have been some error;
        timeout = setTimeout(() => {
            timeout = null;
            cb();
        }, 200);
    }

    _readAccounts(cb) {
        const self = this;
        let addresses;
        const accounts = [];
        async.series([
            (cb1) => {
                self.web3.eth.getAccounts((err, _accounts) => {
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
                    self.web3.eth.getBalance(address, (err, balance) => {
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
                self.st.accounts = accounts;
                cb1();
            },
        ], cb);
    }

    connect(cb) {
        const self = this;
/*        self.blockFilter = self.web3.eth.filter("latest", () => {
            self._invalidateBlock();
        }); */
        self.checkConnectionInterval = setInterval(() => {
            self.web3.eth.getBlockNumber((err, bn) => {
                if (err) {
                    self.reset(err, 5000);
                    return;
                }
                if (bn !== self.st.block.number) {
                    self._invalidateBlock();
                }
            });
        }, 1000);

        async.series([
            (cb1) => {
                self._registerSync(cb1);
            },
            (cb1) => {
                self._readAccounts(cb1);
            },
            (cb1) => {
                self._invalidateBlock();
                cb1();
            },
        ], cb);
    }

    reset(err = null, retry = 1) {
        const self = this;
        self.st = {
            accounts: [],
            block: {},
            connected: false,
            error: err,
        };
        if (self.syncObj) {
            self.syncObj.stopWatching();
            self.syncObj = null;
        }
        if (self.checkConnectionInterval) {
            clearInterval(self.checkConnectionInterval);
            self.checkConnectionInterval = null;
        }
        if (!self.retrying) {
            self.retrying = true;
            setTimeout(() => {
                self.connect((errConnect) => {
                    self.retrying = false;
                    if (errConnect) {
                        self.reset(errConnect, 10000);
                        return;
                    }
                    self.st.connected = true;
                    self.updateState();
                });
            }, retry);
        }
        self.updateState();
    }

    processBlock(cb) {
        const self = this;
        async.series([
            (cb1) => {
                self.web3.eth.getBlock("latest", true, (err, block) => {
                    if (err) {
                        self.reset(err, 5000);
                        return;
                    }
                    self.st.block = block;
                    cb1();
                });
            },
            (cb1) => {
                self._readAccounts(cb1);
            },
        ], cb);
    }

    _invalidateBlock() {
        const self = this;
        self.invalidBlock = true;
        if (!self.processingBlock) {
            self.invalidBlock = false;
            self.processingBlock = true;
            self.processBlock(() => {
                self.processingBlock = false;
                if (self.invalidBlock) {
                    self._invalidateBlock();
                } else {
                    self.updateState();
                }
            });
        }
    }

    updateState() {
        const self = this;
        self.emit("newState", self.st);
    }

}
