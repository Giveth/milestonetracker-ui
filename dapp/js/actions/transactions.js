import { transactionActions } from "../constants";

export const newTransaction = hash => ({
    type: transactionActions.NEW_TRANSATION,
    hash,
});

export const transactionMined = hash => ({
    type: transactionActions.TRANSACTION_MINED,
    hash,
});

export const dismissTransaction = hash => ({
    type: transactionActions.DISMISS_TRANSACTION,
    hash,
});
