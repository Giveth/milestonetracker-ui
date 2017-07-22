import * as c from "../constants";

const givethDirectory = (state = {}, action) => {
    if (action.type === c.GIVETHDIRECTORY_NEWSTATE) {
        const mutation = Object.assign({}, action.state);
        mutation.loaded = true;

        return Object.assign({}, mutation);
    }
    return state;
};

export default givethDirectory;
