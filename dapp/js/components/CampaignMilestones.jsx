/**
 * Show milestones of the campaign and possible action based on access level
 *
 * Expects following properties:
 * @prop{string} recipient                Address of the recipient for the milestones
 * @prop{string} donor                    Donor's address
 * @prop{string} arbitrator               Arbitrator's address
 * @prop{bool}   changingMilestones       Flag to indicate if there are milestones to be approved
 * @prop{bool}   campaignCanceled         Flag to indicate if the campaign has been cancelled
 * @prop{array}  milestones               Array of approved milestones
 * @prop{string} milestoneTrackerAddress  Address of the MilestoneTracker contract
 * @prop{string} proposedMilestonesHash   Hash of the milestone proposal
 * @prop{array}  proposedMilestones       Array of proposed milestones to be approved
 */

import React from "react";
import PropTypes from "prop-types";

import { Table } from "react-bootstrap";
import { ButtonUnproposeMilestones, ButtonAcceptMilestones } from "../containers/Buttons";
import Milestones from "./Milestones";
import MilestonesApproved from "./MilestonesApproved";
import MilestonesFormation from "./MilestonesFormation";

export default function CampaignMilestones(props) {
    let proposedMilestonesButtons = [];

    if (props.actions) {
        if (props.actions.acceptProposedMilestones) {
            proposedMilestonesButtons.push(<ButtonAcceptMilestones
              key="acceptMilestones"
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
              proposalHash={ props.proposedMilestonesHash }
              action= { props.actions.acceptProposedMilestones }
            />);
        }
        if (props.actions.unproposeMilestones) {
            proposedMilestonesButtons.push(<ButtonUnproposeMilestones
              key="unproposeMilestones"
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
              action= { props.actions.unproposeMilestones }
            />);
        }
    }

    return (
        <div>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Recipient's Address</td>
                        <td>{ props.recipient }</td>
                    </tr>
                    <tr>
                        <td>Donor's Address</td>
                        <td>{ props.donor }</td>
                    </tr>
                    <tr>
                        <td>Arbitrator's Address</td>
                        <td>{ props.arbitrator }</td>
                    </tr>
                    <tr>
                        <td>Milestones to review</td>
                        <td>{ props.changingMilestones ? "yes" : "no" }</td>
                    </tr>
                    <tr>
                        <td>Campaign cancelled</td>
                        <td>{ props.campaignCanceled ? "yes" : "no" }</td>
                    </tr>
                </tbody>
            </Table>
            <MilestonesApproved
              milestones={ props.milestones }
              header="Approved Milestones"
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
            />
            <Milestones
              milestones={ props.proposedMilestones }
              header="Proposed Milestones"
            >
                <div className="padding">{ proposedMilestonesButtons }</div>
            </Milestones>
            <MilestonesFormation
              newMilestones={ props.newMilestones }
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
              recipient = {props.recipient}
            />
        </div>
    );
}

CampaignMilestones.propTypes = {
    recipient: PropTypes.string.isRequired,
    donor: PropTypes.string.isRequired,
    arbitrator: PropTypes.string.isRequired,
    changingMilestones: PropTypes.bool.isRequired,
    campaignCanceled: PropTypes.bool.isRequired,
    milestones: PropTypes.array.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    proposedMilestonesHash: PropTypes.string,
    proposedMilestones: PropTypes.array,
    newMilestones: PropTypes.object,
    vaultAddress: PropTypes.string.isRequired,
    actions: PropTypes.object,
};
