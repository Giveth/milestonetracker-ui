import * as c from "../constants";

const formReducer = (state = {}, action) => {
    switch (action.type) {

    // Update a value of a milestone
    case c.FORM_UPDATE_VALUE: {
        if (state[ action.milestoneTrackerAddress ]) {
            const milestones = state[ action.milestoneTrackerAddress ].milestones;

            if (milestones && milestones.length > action.index) {
                const newMilestones = [].concat(milestones);
                newMilestones[ action.index ][ action.name ] = action.value;

                return Object.assign({}, state, {
                    [ action.milestoneTrackerAddress ]: {
                        milestones: newMilestones,
                    },
                });
            }
        }
        return state;
    }
    case c.CANCEL_NEW_MILESTONE: {
        if (state[ action.milestoneTrackerAddress ] &&
            state[ action.milestoneTrackerAddress ].milestones &&
            state[ action.milestoneTrackerAddress ].milestones.length > action.index) {
            const newState = Object.assign({}, state);
            delete newState[ action.milestoneTrackerAddress ].milestones.splice(action.index, 1);
            return newState;
        }
        return state;
    }
    // Reset the form
    case c.FORM_RESET: {
        const newState = Object.assign({}, state);
        delete newState[ action.milestoneTrackerAddress ];
        return newState;
    }

    // Add new milestone to be proposed
    case c.ADD_MILESTONE: {
        const newMilestone = {
            description: "",
            url: "",
            minCompletionDate: "",
            maxCompletionDate: "",
            reviewer: "",
            milestoneLeadLink: "",
            reviewTime: "",
            paymentSource: "",
            payDescription: "",
            payRecipient: "",
            payValue: "",
            payDelay: "",
        };

        let milestonesToProp = Object.assign({}, state[ action.milestoneTrackerAddress ]);
        if (milestonesToProp.milestones) {
        // This campaign already has some new milestones, just add this one
            milestonesToProp.milestones.push(newMilestone);
        } else {
        // There are no new milestones in this campaign, create the whole structure
            milestonesToProp = {
                milestones: [ newMilestone ],
                status: "new",
            };
        }

        return Object.assign({}, state, {
            [ action.milestoneTrackerAddress ]: milestonesToProp,
        });
    }

    default:
        return state;
    }
};

export default formReducer;
