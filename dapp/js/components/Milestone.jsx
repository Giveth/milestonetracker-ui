/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";
//
import { Table } from "react-bootstrap";
import moment from "moment";
// import { LinkContainer } from "react-router-bootstrap";

export default function Milestone(props) {
    const dn = moment.unix(props.minCompletionDate);
    const dm = moment.unix(props.maxCompletionDate);
    const rt = moment.duration(props.reviewTime, "seconds");

    return (
        <div>
            <p>{ props.description }</p>
            <Table responsive condensed hover>
                <tbody>
                    <tr>
                        <td><strong>URL: </strong>{ props.url }</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Valid date: </strong>
                            { dn.format("ll") } - { dm.format("ll") }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Time left: </strong>
                            { dm.fromNow() }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Recipient: </strong>
                            { props.milestoneLeadLink }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Reviewer: </strong>
                            { props.reviewer }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Reviewer time: </strong>
                            { rt.humanize() }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Payment source address: </strong>
                            { props.paymentSource }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Status: </strong>
                            { props.status }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Done time: </strong>
                            { props.doneTime }
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

Milestone.propTypes = {
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    maxCompletionDate: React.PropTypes.any.isRequired,
    minCompletionDate: React.PropTypes.any.isRequired,
    milestoneLeadLink: React.PropTypes.string.isRequired,
    reviewer: React.PropTypes.string.isRequired,
    reviewTime: React.PropTypes.any.isRequired,
    paymentSource: React.PropTypes.string.isRequired,
    status: React.PropTypes.string,
    doneTime: React.PropTypes.number,
};
