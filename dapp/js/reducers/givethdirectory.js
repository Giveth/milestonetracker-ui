import * as c from "../constants";

const givethDirectory = (state = { }, action) => {
    if (action.type === c.GIVETHDIRECTORY_NEWSTATE) {
        return Object.assign({}, action.state);
    }
    return state;
};

export default givethDirectory;
