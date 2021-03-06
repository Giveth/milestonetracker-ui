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

    const milestoneCategories = [
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
            milestones: milestones
                          .filter(milestone => milestone.status === "Canceled")
                          .map((milestone) => {
                              const mlstn = milestone;
                              mlstn.valid = false;
                              return mlstn;
                          }),
        },
    ];

    // Only show proposed milestones if there are any
    if (Array.isArray(props.milestoneTracker.proposedMilestones) &&
        props.milestoneTracker.proposedMilestones.length > 0) {
        const buttonsProposed = [];

        if (props.milestoneTracker.actions) {
            if (props.milestoneTracker.actions.acceptProposedMilestones.length > 0) {
                buttonsProposed.push(
                    <Buttons.AcceptMilestones
                      key="acceptMilestones"
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      proposalHash={props.milestoneTracker.proposedMilestonesHash}
                      action={props.milestoneTracker.actions.acceptProposedMilestones}
                    />);
            }
            if (props.milestoneTracker.actions.unproposeMilestones.length > 0) {
                buttonsProposed.push(
                    <Buttons.RejectMilestones
                      key="rejectMilestones"
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      action={props.milestoneTracker.actions.acceptProposedMilestones}
                    />);
            }
        }

        // Add the proposed milestones to the beginning of the category list
        milestoneCategories.unshift({
            title: "Proposed milestones",
            milestones: props.milestoneTracker.proposedMilestones ?
                // filter out inProgressMilestones. We currently add the inProgress
                // milestones to the proposal as there is no way to add new milestones
                // to the milestone tracker w/o canceling the current inProgress milestones.
                // this is a hack to get around that, but we don't want to display this in
                // the ui
                props.milestoneTracker.proposedMilestones
                    .filter(milestone => milestoneCategories[ 0 ].milestones.findIndex(m =>
                            milestone.payData === m.payData &&
                            milestone.payDescription === m.payDescription &&
                            milestone.payRecipient === m.payRecipient &&
                            milestone.payDelay === m.payDelay &&
                            milestone.description === m.description &&
                            milestone.minCompletionDate === m.minCompletionDate &&
                            milestone.maxCompletionDate === m.maxCompletionDate &&
                            milestone.milestoneLeadLink === m.milestoneLeadLink &&
                            milestone.paymentSource === m.paymentSource &&
                            milestone.url === m.url &&
                            milestone.reviewer === m.reviewer &&
                            milestone.reviewTime === m.reviewTime) === -1)
                    .filter(milestone => milestoneCategories[ 1 ].milestones.findIndex(m =>
                        milestone.payData === m.payData &&
                        milestone.payDescription === m.payDescription &&
                        milestone.payRecipient === m.payRecipient &&
                        milestone.payDelay === m.payDelay &&
                        milestone.description === m.description &&
                        milestone.minCompletionDate === m.minCompletionDate &&
                        milestone.maxCompletionDate === m.maxCompletionDate &&
                        milestone.milestoneLeadLink === m.milestoneLeadLink &&
                        milestone.paymentSource === m.paymentSource &&
                        milestone.url === m.url &&
                        milestone.reviewer === m.reviewer &&
                        milestone.reviewTime === m.reviewTime) === -1)
                    .map((milestone, index) => {
                        const mlstn = milestone;
                        mlstn.id = index;
                        return mlstn;
                    }) : [],
            buttons: buttonsProposed,
        });
    }

    // Only add proposing milestones if the user can propose milestones
    if (props.accounts.filter(account => account.address === props.milestoneTracker.recipient)
          .length > 0) {
        const newMilestonesButtons = [
            <ButtonNewMilestone
              key="NewMilestone"
              milestoneTrackerAddress={props.milestoneTrackerAddress}
            />,
        ];
        const campaignMilestones = props.newMilestones[ props.milestoneTrackerAddress ] ||
            { valid: true, milestones: [] };
        const milestonesNew = campaignMilestones.milestones.map(
            (milestone, index) => {
                const mlstn = milestone;
                mlstn.id = index;
                return mlstn;
            },
        );

        const currentMilestones = milestoneCategories.reduce((mlstns, mt) => {
            if (mt.title === "In Progress" || mt.title === "Completed and in Review") {
                return [ ...mlstns, ...mt.milestones ];
            }
            return mlstns;
        }, []);

        if (milestonesNew.length > 0) {
            newMilestonesButtons.push(
                <Buttons.ProposeNewMilestones
                  key="proposeMilestones"
                  action={[ { account: props.milestoneTracker.recipient } ]}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  milestones={milestonesNew}
                  currentMilestones={currentMilestones}
                  disabled={!(campaignMilestones.valid && props.givethDirectoryLoaded)}
                />);
        }

        // Add new milestones to the beginning of the category list
        milestoneCategories.unshift(
            {
                title: "New milestones",
                milestones: milestonesNew,
                buttons: newMilestonesButtons,
                editable: true,
            });
    }

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
                <table style={{ minWidth: `${ columns.length * 200 }pt`, tableLayout: "fixed", margin: "40px auto 0px auto" }}>
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
    newMilestones: PropTypes.shape({}).isRequired,
    givethDirectoryLoaded: PropTypes.bool.isRequired,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        address: PropTypes.string.isRequired,
    })).isRequired,
};
