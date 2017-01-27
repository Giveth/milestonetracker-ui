import { web3, MilestoneTracker } from "../blockchain";

export const newWeb3State = (state) => ({
    type: "WEB3_NEWSTATE",
    state,
});

export const newGivethDirectoryState = (state) => ({
    type: "GIVETHDIRECTORY_NEWSTATE",
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
