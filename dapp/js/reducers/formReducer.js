import * as c from "../constants";

const formReducer = (state = {}, action) => {
    switch (action.type) {

    case c.FORM_UPDATE_VALUE: {
        const milestones = state[ action.milestoneTrackerAddress ];

        if (milestones && milestones.length > action.index) {
            const newMilestones = [].concat(milestones);
            newMilestones[ action.index ][ action.name ] = action.value;

            return Object.assign({}, state, {
                [ action.milestoneTrackerAddress ]: newMilestones,
            });
        }
        return state;
    }
    case c.FORM_RESET:
        return { values: {} };

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

        let milestones = state[ action.milestoneTrackerAddress ];
        if (milestones) {
            milestones = [ newMilestone ].concat(state[ action.milestoneTrackerAddress ]);
        } else {
            milestones = [ newMilestone ];
        }

        return Object.assign({}, state, {
            [ action.milestoneTrackerAddress ]: milestones,
        });
    }

    default:
        return state;
    }
};

export default formReducer;
