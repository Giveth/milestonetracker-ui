// import { web3, MilestoneTracker } from "../blockchain";
import * as c from "../constants";

export const newWeb3State = state => ({
    type: c.WEB3_NEWSTATE,
    state,
});

export const newGivethDirectoryState = state => ({
    type: c.GIVETHDIRECTORY_NEWSTATE,
    state,
});

export function onInputChange(milestoneTrackerAddress, index, name, value) {
    return dispatch => dispatch({
        type: c.FORM_UPDATE_VALUE,
        milestoneTrackerAddress,
        index,
        name,
        value,
    });
}

export function reset() {
    return dispatch => dispatch({
        type: c.FORM_RESET,
    });
}

export function onCancelNewMilestone(milestoneTrackerAddress, index) {
    return dispatch => dispatch({
        type: c.CANCEL_NEW_MILESTONE,
        milestoneTrackerAddress,
        index,
    });
}
