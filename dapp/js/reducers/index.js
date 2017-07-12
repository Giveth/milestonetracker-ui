import { combineReducers } from "redux";
import web3 from "./web3";
import givethDirectory from "./givethdirectory";
import newMilestones from "./newMilestones";
import {
  campaignValues,
  deploymentResults,
  deploymentStatus,
  completedDeployments,
  currentDeploymentStep,
  error,
} from "./deploymentReducer";
import userAccount from "./userReducer";

const reducers = combineReducers({
    campaignValues,
    deploymentResults,
    deploymentStatus,
    completedDeployments,
    currentDeploymentStep,
    error,
    userAccount,
    web3,
    givethDirectory,
    newMilestones,
});

export default reducers;
