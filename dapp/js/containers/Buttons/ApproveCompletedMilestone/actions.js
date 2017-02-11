import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const approveCompletedMilestone = (milestoneTrackerAddress, milestoneID) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.approveCompletedMilestone(
        {
            idMilestone: milestoneID,
        });
};
