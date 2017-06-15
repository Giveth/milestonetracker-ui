import MilestoneTracker from "milestonetracker";
import { web3 } from "../../../blockchain";

/**
 *
 */
export default (milestoneTrackerAddress, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

    milestoneTracker.unproposeMilestones({ from: action[ 0 ].account });
};
