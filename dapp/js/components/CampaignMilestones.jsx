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
         ButtonAcceptMilestones } from "../containers/Buttons";
import Milestones from "./Milestones";

export default function CampaignMilestones(props) {
    let buttons = [];

    const proposedMilestones = [
        {
            description: "Proposal 0",
            url: "http://url_0",
            minCompletionDate: 1485536465,
            maxCompletionDate: 1485709265,
            reviewer: "0xac622a6d87fcf9a1922ae01919b17f33d2ccf456",
            milestoneLeadLink: "0xb742329ced9d9a5a140f12cf0c153b4a10370d0b",
            reviewTime: 172800,
            paymentSource: "0x090bd3a4cf3ff8ebf41c874d44036fa2a075065c",
            payDescription: "Proposal 0",
            payRecipient: "0xaa275222bce2d5a60cd47f709ec7dbba0d8d2f39",
            payValue: 10,
            payDelay: 0,
        },
    ];

    buttons.push(<ButtonProposeMilestones
      key="proposeMilestones"
      milestoneTrackerAddress={ props.milestoneTrackerAddress }
      milestones={ proposedMilestones }
    />);
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
};
