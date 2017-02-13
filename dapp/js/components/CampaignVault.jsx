/**
 * Shows vault information
 *
 * Expects following properties:
 */

import React from "react";

import { Table } from "react-bootstrap";

export default function CampaignVault(props) {
    return (
        <div>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Owner</td>
                        <td>{ props.owner }</td>
                    </tr>
                    <tr>
                        <td>Escape Caller's Address</td>
                        <td>{ props.escapeCaller }</td>
                    </tr>
                    <tr>
                        <td>Escape Destination</td>
                        <td>{ props.escapeDestination }</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>{ JSON.stringify(props.balance, 0, 2) }</td>
                    </tr>
                </tbody>
            </Table>
            <h2>Payments:</h2>
            <pre>{JSON.stringify(props.payments, 0, 2) }</pre>
        </div>
    );
}

CampaignVault.propTypes = {
    owner: React.PropTypes.string.isRequired,
    escapeCaller: React.PropTypes.string.isRequired,
    escapeDestination: React.PropTypes.string.isRequired,
    // balance: React.PropTypes.number.isRequired,
    payments: React.PropTypes.array.isRequired,
};
