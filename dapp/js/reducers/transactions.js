import { transactionActions } from "../constants";

const transactions = (state = [], action) => {
    switch (action.type) {

    case transactionActions.NEW_TRANSATION: {
        return [
            ...state,
            {
                hash: action.hash,
                mined: false,
            },
        ];
    }
    case transactionActions.TRANSACTION_MINED: {
        return state.map((tx) => {
            if (tx.hash !== action.hash) {
                return tx;
            }

            return Object.assign(tx, { mined: true });
        });
    }
    case transactionActions.DISMISS_TRANSACTION: {
        const i = state.findIndex(tx => tx.hash === action.hash);

        if (i > -1) {
            return [
                ...state.slice(0, i),
                ...state.slice(i + 1),
            ];
        }

        return state;
    }
    default: {
        return state;
    }

    }
};

export default transactions;
