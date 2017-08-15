import MilestoneTracker from "milestonetracker";
import * as types from "./actionTypes";
import { web3 } from "../blockchain";
import { newTransaction, transactionMined } from "./transactions";

export const arbitrateApproveCompleted =
    (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
        const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
        milestoneTracker.arbitrateApproveMilestone(
            {
                idMilestone: milestoneID,
                from: action[ 0 ].account,
            },
        ).then((txHash) => {
            dispatch(newTransaction(txHash));
            web3.eth.getTransactionReceiptMined(txHash)
                .then(() => {
                    dispatch(transactionMined(txHash));
                });
        });
    };

export const cancel = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.cancelMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const markCompleted = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.markMilestoneComplete(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const approveCompleted = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.approveCompletedMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const rejectCompleted = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.rejectMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const collect = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.collectMilestone(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const requestPayment = (milestoneTrackerAddress, milestoneID, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.requestMilestonePayment(
        {
            idMilestone: milestoneID,
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(() => {
                dispatch(transactionMined(txHash));
            });
    });
};

export const saveMilestone = data => ({
    type: types.MILESTONE_NEW_SAVE,
    data,
});

export const removeMilestone = (milestoneTrackerAddress, id) => ({
    type: types.MILESTONE_NEW_REMOVE,
    id,
    milestoneTrackerAddress,
});

export const clearMilestones = milestoneTrackerAddress => ({
    type: types.MILESTONE_NEW_CLEAR,
    milestoneTrackerAddress,
});
