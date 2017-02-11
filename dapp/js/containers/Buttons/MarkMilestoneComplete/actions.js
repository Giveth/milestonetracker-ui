import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const completeMilestone = (milestoneTrackerAddress, milestoneID, fromAddress) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.markMilestoneComplete(
        {
            idMilestone: milestoneID,
            from: fromAddress, //recipient or the milestone lead link
        });
};
