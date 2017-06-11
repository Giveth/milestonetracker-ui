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

import React from "react";
import PropTypes from "prop-types";

import { Table } from "react-bootstrap";
import MilestonesApproved from "./MilestonesApproved";

function calculateTokens(balances) {
    return balances.reduce((total, value) => total + value, 0);
}

export default function CampaignDetails(props) {
    return (
        <div to={{ pathname: `${ props.url }` }}>
            <p>{ props.description }</p>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Website</td>
                        <td>
                            <a
                              href={props.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                {props.url}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Tokens owned/emitted</td>
                        <td>{ calculateTokens(props.token.balances) }
                            /
                            { props.token.totalSupply }</td>
                    </tr>
                    <tr>
                        <td>Tokens name</td>
                        <td>{ props.token.name }</td>
                    </tr>
                </tbody>
            </Table>
            <MilestonesApproved
              milestones={props.milestones}
              header="Approved Milestones"
              milestoneTrackerAddress={props.milestoneTrackerAddress}
            />
        </div>
    );
}

CampaignDetails.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    token: PropTypes.shape({
        totalSupply: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        balances: PropTypes.object.isRequired,
    }).isRequired,
};
