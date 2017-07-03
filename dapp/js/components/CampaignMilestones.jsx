/**
 * Show milestones of the campaign and possible action based on access level
 */
import React from "react";
import PropTypes from "prop-types";

import Milestones from "./Milestones";
// import { ButtonUnproposeMilestones, ButtonAcceptMilestones } from "../containers/Buttons";
// import MilestonesApproved from "./MilestonesApproved";
// import MilestonesFormation from "./MilestonesFormation";

export default function CampaignMilestones(props) {
    // let proposedMilestonesButtons = [];
    //
    // if (props.actions) {
    //     if (props.milestoneTracker.actions.acceptProposedMilestones) {
    //         proposedMilestonesButtons.push(<ButtonAcceptMilestones
    //           key="acceptMilestones"
    //           milestoneTrackerAddress={props.milestoneTrackerAddress}
    //           proposalHash={props.proposedMilestonesHash}
    //           action={props.milestoneTracker.actions.acceptProposedMilestones}
    //         />);
    //     }
    //     if (props.actions.unproposeMilestones) {
    //         proposedMilestonesButtons.push(<ButtonUnproposeMilestones
    //           key="unproposeMilestones"
    //           milestoneTrackerAddress={props.milestoneTrackerAddress}
    //           action={props.milestoneTracker.actions.unproposeMilestones}
    //         />);
    //     }
    // }

    const milestonesInProgress = props.milestoneTracker.milestones.filter(milestone => milestone.status === "AcceptedAndInProgress");
    const milestonesPaid = props.milestoneTracker.milestones.filter(milestone => milestone.status === "AuthorizedForPayment");
    const milestonesCompleted = props.milestoneTracker.milestones.filter(milestone => milestone.status === "Completed");
    const milestonesCanceled = props.milestoneTracker.milestones.filter(milestone => milestone.status === "Canceled");

    return (
        <div>
            <h3>Milestones:</h3>
            <div style={{ width: "100%", overflowX: "scroll" }}>
                <table style={{ minWidth: "1200pt", tableLayout: "fixed", margin: "40px auto 0px auto" }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="New milestones"
                                  milestones={[]}
                                />
                            </td>

                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="Proposed milestones"
                                  milestones={props.milestoneTracker.proposedMilestones}
                                />
                            </td>

                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="In Progress"
                                  milestones={milestonesInProgress}
                                />
                            </td>

                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="Completed and in Review"
                                  milestones={milestonesCompleted}
                                />
                            </td>

                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="Finished"
                                  milestones={milestonesPaid}
                                />
                            </td>

                            <td style={{ padding: "5px", width: "200pt", borderCollapse: "collapse", verticalAlign: "top" }}>
                                <Milestones
                                  title="Canceled"
                                  milestones={milestonesCanceled}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);

    // return (
    //     <div>
    //         <MilestonesApproved
    //           milestones={props.milestones}
    //           header="Approved Milestones"
    //           milestoneTrackerAddress={props.milestoneTrackerAddress}
    //         />
    //         <Milestones
    //           milestones={props.proposedMilestones}
    //           header="Proposed Milestones"
    //         >
    //             <div className="padding">{ proposedMilestonesButtons }</div>
    //         </Milestones>
    //         <MilestonesFormation
    //           newMilestones={props.newMilestones}
    //           milestoneTrackerAddress={props.milestoneTrackerAddress}
    //           recipient={props.recipient}
    //         />
    //     </div>
    // );
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
        proposedMilestones: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            url: PropTypes.string,
            minCompletionDate: PropTypes.number.isRequired,
            maxCompletionDate: PropTypes.number.isRequired,
        })),
    }).isRequired,
};
