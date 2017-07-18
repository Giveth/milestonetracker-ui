import * as types from "../actions/actionTypes";

const initialState = {
    milestones: {},
};

const newMilestones = (state = initialState, action) => {
    switch (action.type) {

    case types.MILESTONE_NEW_SAVE: {
        const milestone = {
            description: action.data.description.value,
            maxCompletionDate: action.data.maxCompletionDate.value,
            milestoneLeadLink: action.data.milestoneLeadLink.value,
            minCompletionDate: action.data.minCompletionDate.value,
            payDelay: action.data.payDelay.value,
            payDescription: action.data.payDescription.value,
            payRecipient: action.data.payRecipient.value,
            payValue: action.data.payValue.value,
            paymentSource: action.data.paymentSource.value,
            reviewTime: action.data.reviewTime.value,
            reviewer: action.data.reviewer.value,
            url: action.data.url.value,
            valid: action.data.valid,
        };

        const campaignMilestones = state.milestones[ action.data.milestoneTrackerAddress ] || {};

        if (!campaignMilestones.milestones) {
            campaignMilestones.milestones = [];
        }

        if (Object.prototype.hasOwnProperty.call(action.data, "id") &&
            action.data.id < campaignMilestones.milestones.length) {
            campaignMilestones.milestones[ action.data.id ] = milestone;
        } else {
            campaignMilestones.milestones.push(milestone);
        }

        campaignMilestones.valid = campaignMilestones.milestones.reduce(
            (sum, value) => (sum && value.valid), true);

        const milestones = state.milestones;
        milestones[ action.data.milestoneTrackerAddress ] = campaignMilestones;

        return Object.assign({}, state, {
            milestones,
        });
    }

    case types.MILESTONE_NEW_REMOVE: {
        const campaignMilestones = state.milestones[ action.milestoneTrackerAddress ];
        if (campaignMilestones && action.id < campaignMilestones.milestones.length) {
            campaignMilestones.milestones.splice(action.id, 1);

            const milestones = state.milestones;
            milestones[ action.milestoneTrackerAddress ] = campaignMilestones;

            campaignMilestones.valid = campaignMilestones.milestones.reduce(
                (sum, value) => (sum && value.valid), true);

            return Object.assign({}, state, {
                milestones,
            });
        }
        return state;
    }

    default:
        return state;
    }
};

export default newMilestones;
