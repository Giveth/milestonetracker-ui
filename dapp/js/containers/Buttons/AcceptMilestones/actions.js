import { web3, MilestoneTracker } from "../../../blockchain";

/**
 *
 */
export const acceptMilestones = (milestoneTrackerAddress, hashOfTheProposal) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    console.log(web3.eth.accounts[ 5 ]);
    milestoneTracker.acceptProposedMilestones(
        {
            from: web3.eth.accounts[ 5 ],
            hashProposals: hashOfTheProposal,
        }
    );
};
