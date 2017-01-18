const web3 = (state = { connected: false }, action) => {
    if (action.type === "WEB3_NEWSTATE") {
        return Object.assign({}, action.state);
    }
    return state;
};

export default web3;
