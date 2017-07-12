import * as c from "../constants";

export const newWeb3State = state => ({
    type: c.WEB3_NEWSTATE,
    state,
});

export const newGivethDirectoryState = state => ({
    type: c.GIVETHDIRECTORY_NEWSTATE,
    state,
});
