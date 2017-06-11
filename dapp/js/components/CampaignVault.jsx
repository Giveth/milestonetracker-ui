/**
 * Shows vault information
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";
import { Table, Panel, Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import { web3 } from "../blockchain";
import moment from "moment";

export default function CampaignVault(props) {
    const payments = [];

    for (const record of props.payments) {
        const style = record.paid ? { bsStyle: "success" } : null;
        payments.push(
            <Panel
              {...style}
              key={ record.idPayment }
              eventKey={ record.idPayment }
              header={ record.description }
            >
                <ListGroup fill>
                    <ListGroupItem>
                        <strong>Amount: </strong>
                            { web3.fromWei(record.amount, "ether").toNumber() } ETH
                    </ListGroupItem>
                    <ListGroupItem><strong>Earliest Pay Time: </strong>
                        { moment.unix(record.earliestPayTime).format() }
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Executed: </strong>{ (record.paid) ? "yes" : "no" }
                    </ListGroupItem>
                </ListGroup>
            </Panel>
        );
    }

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
                        <td>{ web3.fromWei(props.balance, "ether") } ETH</td>
                    </tr>
                </tbody>
            </Table>
            <h2>Payment history:</h2>
            <Accordion>{payments}</Accordion>
        </div>
    );
}

CampaignVault.propTypes = {
    owner: PropTypes.string.isRequired,
    escapeCaller: PropTypes.string.isRequired,
    escapeDestination: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    payments: PropTypes.array.isRequired,
};
