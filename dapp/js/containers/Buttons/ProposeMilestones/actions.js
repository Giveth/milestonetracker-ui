import MilestoneTracker from "milestonetracker";
import { web3 } from "../../../blockchain";

/**
 *
 */
export default (milestoneTrackerAddress, milestones, action) => () => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.proposeMilestones(
        {
            newMilestones: Object.assign({}, milestones),
            from: action[ 0 ].account,
        });
};
