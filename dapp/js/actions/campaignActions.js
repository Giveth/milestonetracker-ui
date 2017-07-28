import MilestoneTracker from "milestonetracker";
import { network, web3 } from "../blockchain";
import { clearMilestones } from "./milestoneActions";
import { newTransaction, transactionMined } from "./transactions";

export const donate = (idCampaign, owner, value) => (dispatch) => {
    network.directory.donate(
        { idCampaign, owner, value },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(dispatch(transactionMined(txHash)));
    });
};

export const acceptMilestones = (milestoneTrackerAddress, hashOfTheProposal, action) =>
    (dispatch) => {
        const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
        milestoneTracker.acceptProposedMilestones(
            {
                from: action[ 0 ].account,
                hashProposals: hashOfTheProposal,
            },
        ).then((txHash) => {
            dispatch(newTransaction(txHash));
            web3.eth.getTransactionReceiptMined(txHash)
                .then(dispatch(transactionMined(txHash)));
        });
    };

export const rejectMilestones = (milestoneTrackerAddress, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

    milestoneTracker.unproposeMilestones(
        { from: action[ 0 ].account },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));
        web3.eth.getTransactionReceiptMined(txHash)
            .then(dispatch(transactionMined(txHash)));
    });
};

export const proposeNewMilestones = (milestoneTrackerAddress, milestones, action) => (dispatch) => {
    const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);
    milestoneTracker.proposeMilestones(
        {
            newMilestones: Object.assign({}, milestones),
            from: action[ 0 ].account,
        },
    ).then((txHash) => {
        dispatch(newTransaction(txHash));

        web3.eth.getTransactionReceiptMined(txHash)
            .then(dispatch(transactionMined(txHash)));
    });

    dispatch(clearMilestones(milestoneTrackerAddress));
};
