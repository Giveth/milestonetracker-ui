const givethDirectory = (state = { }, action) => {
    if (action.type === "GIVETHDIRECTORY_NEWSTATE") {
        return Object.assign({}, action.state);
    }
    return state;
};

export default givethDirectory;
