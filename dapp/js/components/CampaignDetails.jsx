/**
 * Shows basic details of the campaign
 *
 * Expects following properties:
 * @prop{string} url                      URL of the campaign
 * @prop{string} name                     Campaign's name
 * @prop{string} description              Campaign's description
 * @prop{string} status                   Status of the campaign
 * @prop{string} tokenAddress             Address of the MiniMe Token contract for the campaign
 * @prop{string} vaultAddress             Address of the Vault contract for this campaign
 * @prop{string} milestoneTrackerAddress  Address of the milestonetracker contract
 */

/* eslint-disable */
import React from "react";

import { Table } from "react-bootstrap";
import MilestonesApproved from "./MilestonesApproved";

function calculateTokens(balances) {
    let owned = 0;
    for (const key in balances) {
        if (balances.hasOwnProperty(key)) {
            owned += balances[ key ];
        }
    }
    return owned;
}

export default function CampaignDetails(props) {
    return (
        <div to={ { pathname: `${ props.url }` } }>
            <p>{ props.description }</p>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Donation Address and Token Contract</td>
                        <td><a href={ `${ props.domain }address/${ props.tokenAddress }` } target="_blank">{ props.tokenAddress }</a></td>
                    </tr>
                    <tr>
                        <td>Vault Address</td>
                        <td><a href={ `${ props.domain }address/${ props.vaultAddress }` } target="_blank">{ props.vaultAddress }</a></td>
                    </tr>
                    <tr>
                        <td>Milestone Tracker Address</td>
                        <td><a href={ `${ props.domain }address/${ props.milestoneTrackerAddress }` } target="_blank">{ props.milestoneTrackerAddress }</a></td>
                    </tr>
                    <tr>
                        <td>Campaign Controller Address</td>
                        <td><a href={ `${ props.domain }address/${ props.campaign }` } target="_blank">{ props.campaign }</a></td>
                    </tr>
                    <tr>
                        <td>Token name</td>
                        <td>{ props.token.name }</td>
                    </tr>
                    <tr>
                        <td>URL</td>
                        <td>
                            <a
                              href={ props.url }
                              target="_blank"
                            >
                            { props.url }
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <MilestonesApproved
              milestones={ props.milestones }
              header="Approved Milestones"
              milestoneTrackerAddress={ props.milestoneTrackerAddress }
            />
        </div>
    );
}

CampaignDetails.propTypes = {
    campaign: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestones: React.PropTypes.array,
    token: React.PropTypes.object.isRequired,
};
