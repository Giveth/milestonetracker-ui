import * as c from "../../../constants";

/**
 *
 */
export function addMilestone(milestoneTrackerAddress) {
    return dispatch => dispatch({
        type: c.ADD_MILESTONE,
        milestoneTrackerAddress,
    });
}
