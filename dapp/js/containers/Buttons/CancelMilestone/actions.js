import MilestoneTracker from "milestonetracker";
import { web3 } from "../../../blockchain";

/**
 *
 */
export default (milestoneTrackerAddress, milestoneID, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.cancelMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        });
};
