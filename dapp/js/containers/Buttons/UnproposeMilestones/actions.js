import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const unproposeMilestones = (milestoneTrackerAddress) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

    milestoneTracker.unproposeMilestones({ from: web3.eth.accounts[ 6 ] });
};
