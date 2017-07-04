import MilestoneTracker from "milestonetracker";
import { network, web3 } from "../blockchain";

export const donate = (idCampaign, owner, value) => () => {
    network.directory.donate({ idCampaign, owner, value });
};

export const acceptMilestones = (milestoneTrackerAddress, hashOfTheProposal, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.acceptProposedMilestones(
        {
            from: action[ 0 ].account,
            hashProposals: hashOfTheProposal,
        },
    );
};

export const rejectMilestones = (milestoneTrackerAddress, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

    milestoneTracker.unproposeMilestones({ from: action[ 0 ].account });
};
