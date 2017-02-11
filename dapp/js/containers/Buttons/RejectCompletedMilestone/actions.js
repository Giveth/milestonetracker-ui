import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const rejectCompletedMilestone =
(milestoneTrackerAddress, milestoneID, reviewerAddress) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.rejectMilestone(
        {
            idMilestone: milestoneID,
            from: reviewerAddress,
        });
};
