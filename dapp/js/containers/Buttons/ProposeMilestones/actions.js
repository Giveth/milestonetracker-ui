import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const proposeMilestones = (milestoneTrackerAddress, milestones, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.proposeMilestones(
        {
            newMilestones: Object.assign({}, milestones),
            from: action[ 0 ].account,
        });
};
