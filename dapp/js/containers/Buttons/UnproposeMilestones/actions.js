import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const unproposeMilestones = (milestoneTrackerAddress, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

    milestoneTracker.unproposeMilestones({ from: action[ 0 ].account });
};
