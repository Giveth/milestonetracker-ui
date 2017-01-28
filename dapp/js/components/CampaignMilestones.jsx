/**
 *
 *
 * Expects following properties:
 */

import React from "react";

import { Table } from "react-bootstrap";
import { ButtonProposeMilestones, ButtonUnproposeMilestones,
         ButtonAcceptMilestones } from "../containers/Buttons";

export default function CampaignMilestones(props) {
    let milestones = [];
    let proposedMilestonesCont = [];
    let buttons = [];

    for (let i = 0; i < props.milestones.length; ++ i) {
        milestones.push(
            <pre key={ i }>
                {JSON.stringify(props.milestones[ i ], null, 2)}
            </pre>);
    }

    if (props.proposedMilestones) {
        for (let i = 0; i < props.proposedMilestones.length; ++ i) {
            proposedMilestonesCont.push(
                <pre key={ i }>
                    {JSON.stringify(props.proposedMilestones[ i ], null, 2)}
                </pre>);
        }
    }
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
            { buttons }
            { milestones }
            { proposedMilestonesCont }
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
