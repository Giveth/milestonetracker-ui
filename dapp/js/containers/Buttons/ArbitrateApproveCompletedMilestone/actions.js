import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const approveCompletedMilestone =
(milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.arbitrateApproveMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};
