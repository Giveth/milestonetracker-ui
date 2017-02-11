import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const completeMilestone = (milestoneTrackerAddress, milestoneID, reviewer) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.markMilestoneComplete(
        {
            idMilestone: milestoneID,
            from: reviewer,
        });
};
