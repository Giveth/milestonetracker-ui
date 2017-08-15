const initialState = {
    accounts: [],
    connected: false,
};

const web3 = (state = initialState, action) => {
    if (action.type === "WEB3_NEWSTATE") {
        return Object.assign({}, action.state);
    }
    return state;
};

export default web3;
