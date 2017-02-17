import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const cancelMilestone = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.cancelMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};
