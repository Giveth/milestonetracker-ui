import * as types from "../actions/actionTypes";

const newMilestones = (state = {}, action) => {
    switch (action.type) {

    case types.MILESTONE_NEW_SAVE: {
        const milestoneTrackerAddress = action.data.milestoneTrackerAddress;
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

        const campaignMilestones = state[ milestoneTrackerAddress ] || {};

        if (!campaignMilestones.milestones) {
            campaignMilestones.milestones = [];
        }

        if (Object.prototype.hasOwnProperty.call(action.data, "id") &&
            action.data.id < campaignMilestones.milestones.length) {
            campaignMilestones.milestones[ action.data.id ] = milestone;
        } else {
            campaignMilestones.milestones.push(milestone);
        }

        campaignMilestones.valid = campaignMilestones.milestones
            .reduce((sum, record) => sum && record.valid, true);

        const mutation = {};
        mutation[ milestoneTrackerAddress ] = campaignMilestones;

        return Object.assign({}, state, mutation);
    }

    case types.MILESTONE_NEW_REMOVE: {
        const milestoneTrackerAddress = action.milestoneTrackerAddress;
        const campaignMilestones = state[ milestoneTrackerAddress ];

        if (campaignMilestones && action.id < campaignMilestones.milestones.length) {
            campaignMilestones.milestones.splice(action.id, 1);

            campaignMilestones.valid = campaignMilestones.milestones.reduce(
                (sum, value) => (sum && value.valid), true);

            const mutation = {};
            mutation[ milestoneTrackerAddress ] = campaignMilestones;

            return Object.assign({}, state, mutation);
        }
        return state;
    }

    default:
        return state;
    }
};

export default newMilestones;
