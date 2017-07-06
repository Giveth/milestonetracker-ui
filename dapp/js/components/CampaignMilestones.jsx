/**
 * Show milestones of the campaign and possible action based on access level
 */
import React from "react";
import PropTypes from "prop-types";

import Milestones from "./Milestones";
import ButtonNewMilestone from "./ButtonNewMilestone";
import * as Buttons from "../containers/Buttons/Campaign";

export default function CampaignMilestones(props) {
    const milestones = props.milestoneTracker.milestones.map((milestone, index) => {
        const mlstn = milestone;
        mlstn.id = index;
        return mlstn;
    });

    const milestonesNew = props.newMilestones.milestones.map((milestone, index) => {
        const mlstn = milestone;
        mlstn.id = index;
        return mlstn;
    });

    const buttonsProposed = [];

    if (props.milestoneTracker.actions) {
        if (props.milestoneTracker.actions.acceptProposedMilestones) {
            buttonsProposed.push(
                <Buttons.AcceptMilestones
                  key="acceptMilestones"
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  proposalHash={props.milestoneTracker.proposedMilestonesHash}
                  action={props.milestoneTracker.actions.acceptProposedMilestones}
                />);
        }
        if (props.milestoneTracker.actions.unproposeMilestones) {
            buttonsProposed.push(
                <Buttons.RejectMilestones
                  key="rejectMilestones"
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  action={props.milestoneTracker.actions.acceptProposedMilestones}
                />);
        }
    }

    const newMilestonesButtons = [ <ButtonNewMilestone key="NewMilestone" /> ];

    if (props.newMilestones.milestones.length > 0 &&
        props.accounts.filter(account => account.address === props.milestoneTracker.recipient)) {
        newMilestonesButtons.push(
            <Buttons.ProposeNewMilestones
              key="proposeMilestones"
              action={[ { account: props.milestoneTracker.recipient } ]}
              milestoneTrackerAddress={props.milestoneTrackerAddress}
              milestones={milestonesNew}
              disabled={props.newMilestones.valid !== true}
            />);
    }

    const milestoneCategories = [
        {
            title: "New milestones",
            milestones: milestonesNew,
            buttons: newMilestonesButtons,
            editable: true,
        },
        {
            title: "Proposed milestones",
            milestones: props.milestoneTracker.proposedMilestones ?
                props.milestoneTracker.proposedMilestones.map((milestone, index) => {
                    const mlstn = milestone;
                    mlstn.id = index;
                    return mlstn;
                }) : [],
            buttons: buttonsProposed,
        },
        {
            title: "In Progress",
            milestones: milestones.filter(milestone => milestone.status === "AcceptedAndInProgress"),
        },
        {
            title: "Completed and in Review",
            milestones: milestones.filter(milestone => milestone.status === "Completed"),
        },
        {
            title: "Finished",
            milestones: milestones.filter(milestone => milestone.status === "AuthorizedForPayment"),
        },
        {
            title: "Canceled",
            milestones: milestones.filter(milestone => milestone.status === "Canceled"),
        },
    ];

    const columns = milestoneCategories.map(category => (
        <td
          key={category.title}
          style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}
        >
            <Milestones
              title={category.title}
              milestones={category.milestones}
              milestoneTrackerAddress={props.milestoneTrackerAddress}
              buttons={category.buttons ? category.buttons : ""}
              editable={category.editable}
            />
        </td>
    ));

    return (
        <div>
            <h3>Milestones:</h3>
            <div style={{ width: "100%", overflowX: "scroll" }}>
                <table style={{ minWidth: "1200pt", tableLayout: "fixed", margin: "40px auto 0px auto" }}>
                    <tbody>
                        <tr>
                            {columns}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}

CampaignMilestones.propTypes = {
    milestoneTracker: PropTypes.shape({
        recipient: PropTypes.string.isRequired,
        donor: PropTypes.string.isRequired,
        arbitrator: PropTypes.string.isRequired,
        campaignCanceled: PropTypes.bool.isRequired,
        changingMilestones: PropTypes.bool.isRequired,
        milestones: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            url: PropTypes.string,
            minCompletionDate: PropTypes.number.isRequired,
            maxCompletionDate: PropTypes.number.isRequired,
        })).isRequired,
        actions: PropTypes.shape({
            acceptProposedMilestones: PropTypes.arrayOf(PropTypes.shape({
                account: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            })),
            unproposeMilestones: PropTypes.arrayOf(PropTypes.shape({
                account: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            })),
        }),
        proposedMilestonesHash: PropTypes.string,
        proposedMilestones: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            url: PropTypes.string,
            minCompletionDate: PropTypes.number.isRequired,
            maxCompletionDate: PropTypes.number.isRequired,
        })),
    }).isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    newMilestones: PropTypes.shape({
        valid: PropTypes.bool.isRequired,
        milestones: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        address: PropTypes.string.isRequired,
    })).isRequired,
};
