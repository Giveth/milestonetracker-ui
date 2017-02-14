import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const collectPayment = (milestoneTrackerAddress, fromAddress, milestoneID) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.collectMilestone(
        {
            from: fromAddress,
            idMilestone: milestoneID,
        }
    );
};
