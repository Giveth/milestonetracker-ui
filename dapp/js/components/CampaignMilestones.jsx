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

import { Table } from "react-bootstrap";
import { ButtonProposeMilestones, ButtonUnproposeMilestones,
         ButtonAcceptMilestones, ButtonAddMilestone } from "../containers/Buttons";
import Milestones from "./Milestones";
import MilestonesFormation from "./MilestonesFormation";

export default function CampaignMilestones(props) {
    let buttons = [];
    let milestonesFormation = "";

    if (props.newMilestones) {
        buttons.push(<ButtonProposeMilestones
          key="proposeMilestones"
          milestoneTrackerAddress={ props.milestoneTrackerAddress }
          milestones={ props.proposedMilestones }
        />);
    }
    if (props.changingMilestones) {
        buttons.push(<ButtonUnproposeMilestones
          key="unproposeMilestones"
          milestoneTrackerAddress={ props.milestoneTrackerAddress }
        />);
    }
    if (props.proposedMilestonesHash) {
        buttons.push(<ButtonAcceptMilestones
          key="acceptMilestones"
          milestoneTrackerAddress={ props.milestoneTrackerAddress }
          proposalHash={ props.proposedMilestonesHash }
        />);
    }

    if (props.newMilestones) {
        milestonesFormation = (
            <MilestonesFormation
              newMilestones={ props.newMilestones }
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
              header="Milestones to propose"
            />
        );
    }
    buttons.push(<ButtonAddMilestone
      milestoneTrackerAddress={ props.milestoneTrackerAddress }
    />);

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
                    <tr>
                        <td>Accepted milestones</td>
                        <td>{ props.milestones.length }</td>
                    </tr>
                    <tr>
                        <td>Proposed milestones</td>
                        <td>{ props.proposedMilestones ? props.proposedMilestones.length : 0 }</td>
                    </tr>
                </tbody>
            </Table>
            <Milestones
              milestones={ props.milestones }
              approved
              header="Approved Milestones"
            />
            <Milestones
              milestones={ props.proposedMilestones }
              header="Proposed Milestones"
            />
            { milestonesFormation }
            { buttons }
        </div>
    );
}

CampaignMilestones.propTypes = {
    recipient: React.PropTypes.string.isRequired,
    donor: React.PropTypes.string.isRequired,
    arbitrator: React.PropTypes.string.isRequired,
    changingMilestones: React.PropTypes.bool.isRequired,
    campaignCanceled: React.PropTypes.bool.isRequired,
    milestones: React.PropTypes.array.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    proposedMilestonesHash: React.PropTypes.string,
    proposedMilestones: React.PropTypes.array,
    newMilestones: React.PropTypes.array,
};
