import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const proposeMilestones = (milestoneTrackerAddress, milestones) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.proposeMilestones(
        {
            newMilestones: Object.assign({}, milestones),
            from: web3.eth.accounts[ 6 ],
        });
};
