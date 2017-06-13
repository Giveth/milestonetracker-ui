import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export default (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.approveCompletedMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};
