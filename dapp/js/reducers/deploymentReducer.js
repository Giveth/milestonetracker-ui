/* eslint-disable */
import { deploymentActions } from '../constants';

//addresses, tokenName, and tokenSymbol.
export function campaignValues(state = {}, action) {
    switch(action.type) {
        case deploymentActions.UPDATE_CAMPAIGN_VALUES:
            return action.payload.data;
        case deploymentActions.RESET:
            return Object.assign({}, state, {
                tokenName: '',
                tokenSymbol: '',
                campaignName: '',
                campaignDescription: '',
                campaignUrl: '',
                campaignExtra: ''
            })
        default: return state;
    }
}

//what state is the deployment in?
export function deploymentStatus(state = deploymentActions.RUN_UNSTARTED, action) {
    switch(action.type) {
        case deploymentActions.RUN_IN_PROGRESS:
            return action.payload.data;
        case deploymentActions.RUN_COMPLETE:
            return action.payload.data;
        case deploymentActions.RUN_ERROR:
            return action.payload.data;
        case deploymentActions.RESET:
            return deploymentActions.RUN_UNSTARTED;
        case deploymentActions.CANCEL:
            return deploymentActions.RUN_UNSTARTED;
        default: return state;
    }
}

//current step in the deployment chain.
export function currentDeploymentStep(state = null, action) {
    switch(action.type) {
        case deploymentActions.UPDATE_DEPLOYMENT_STEP:
            return action.payload.data;
        case deploymentActions.RESET:
            return null;
        case deploymentActions.CANCEL:
            return null;
        default: return state;
    }
}

//full results (contract addresses and tx hashes) of a completed deployment chain.
export function deploymentResults(state = [], action) {
    switch(action.type) {
        case deploymentActions.SET_DEPLOYMENT_RESULTS:
            return action.payload.data;
        case deploymentActions.RESET:
            return [];
        case deploymentActions.CANCEL:
            return [];
        default: return state;
    }
}

//set individual deployments as complete as the chain progresses.
export function completedDeployments(state = {}, action) {
    switch(action.type) {
        case deploymentActions.DEPLOYMENT_COMPLETE:
            return Object.assign({}, state, { [action.payload.data]: true });
        case deploymentActions.RESET:
            return Object.assign({}, state, resetCompletedDeployments(state));
        case deploymentActions.CANCEL:
            return Object.assign({}, state, resetCompletedDeployments(state));
        default: return state;
    }
}

//show errors in the deployment process to the user.
export function error(state = false, action) {
    switch(action.type) {
        case deploymentActions.RUN_ERROR:
            return action.payload.data;
        case deploymentActions.RESET:
            return false;
        case deploymentActions.CANCEL:
            return false;
        default: return false;
    }
}

/*********************************
            HELPERS
*********************************/

//reset all values to their initial state.
function resetCompletedDeployments(state) {
    let newState = state;
    for(var deployment in newState) {
        newState[deployment] = false;
    }
    return newState;
}
