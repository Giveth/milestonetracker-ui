import * as types from "../actions/actionTypes";

const initialState = {
    valid: false,
    milestones: [],
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

        const mlstns = state.milestones.slice();
        if (Object.prototype.hasOwnProperty.call(action.data, "id") &&
            action.data.id < mlstns.length) {
            mlstns[ action.data.id ] = milestone;
        } else {
            mlstns.push(milestone);
        }

        return Object.assign({}, state, {
            milestones: mlstns,
            valid: mlstns.reduce((sum, value) => (sum && value.valid), true),
        });
    }

    case types.MILESTONE_NEW_REMOVE: {
        if (action.id < state.milestones.length) {
            const mlstns = state.milestones.slice();
            mlstns.splice(action.id, 1);

            return Object.assign({}, state, {
                milestones: mlstns,
                valid: mlstns.reduce((sum, value) => (sum && value.valid), true),
            });
        }
        return state;
    }

    default:
        return state;
    }
};

export default newMilestones;
