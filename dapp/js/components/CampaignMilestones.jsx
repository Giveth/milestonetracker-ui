/**
 *
 *
 * Expects following properties:
 */

import React from "react";

import { Table } from "react-bootstrap";

export default function CampaignMilestones(props) {
    let milestones = [];

    for (let i = 0; i < props.milestones.length; ++ i) {
        milestones.push(
            <pre key={ i }>
                {JSON.stringify(props.milestones[ i ], null, 2)}
            </pre>);
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

            { milestones }
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
};
