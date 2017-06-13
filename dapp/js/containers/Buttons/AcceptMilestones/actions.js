import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export default (milestoneTrackerAddress, hashOfTheProposal, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.acceptProposedMilestones(
        {
            from: action[ 0 ].account,
            hashProposals: hashOfTheProposal,
        },
    );
};
