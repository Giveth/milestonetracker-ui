import { web3, MilestoneTracker } from "../blockchain";
import * as c from "../constants";

export const newWeb3State = (state) => ({
    type: c.WEB3_NEWSTATE,
    state,
});

export const newGivethDirectoryState = (state) => ({
    type: c.GIVETHDIRECTORY_NEWSTATE,
    state,
});

export const proposeMilestones = (milestoneTrackerAddress, milestones) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.proposeMilestones(
        {
            newMilestones: milestones,
            from: web3.eth.accounts[ 6 ],
        });
};

export const unproposeMilestones = (milestoneTrackerAddress) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.unproposeMilestones(
        {
            from: web3.eth.accounts[ 6 ],
        });
};

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
