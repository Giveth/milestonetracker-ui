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

export const proposeNewMilestones =
    (milestoneTrackerAddress, milestones, inProgressMilestones, action) => (dispatch) => {
        const milestoneTracker = new MilestoneTracker(web3, milestoneTrackerAddress);

        // a hack to allow a recipient to add new milestones w/o canceling current
        // inProcess milestones
        milestoneTracker.proposeMilestones(
            {
                newMilestones: Object.assign({}, [ ...milestones, ...inProgressMilestones ]),
                from: action[ 0 ].account,
            },
        ).then((txHash) => {
            dispatch(newTransaction(txHash));

            web3.eth.getTransactionReceiptMined(txHash)
                .then(dispatch(transactionMined(txHash)));
        });

        dispatch(clearMilestones(milestoneTrackerAddress));
    };
