import MilestoneTracker from "milestonetracker";
import { web3 } from "../blockchain";

export const arbitrateApproveCompleted =
    (milestoneTrackerAddress, milestoneID, action) => () => {
        const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
        milestoneTracker.arbitrateApproveMilestone(
            {
                idMilestone: milestoneID,
                from: action[ 0 ].account,
            });
    };

export const cancel = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.cancelMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};

export const markCompleted = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.markMilestoneComplete(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};

export const approveCompleted = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.approveCompletedMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};

export const rejectCompleted = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.rejectMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};

export const collect = (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.collectMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    );
};
