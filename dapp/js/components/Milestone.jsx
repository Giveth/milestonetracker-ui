/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";
//
import { ListGroup, ListGroupItem } from "react-bootstrap";
import moment from "moment";
// import { LinkContainer } from "react-router-bootstrap";

export default function Milestone(props) {
    const dn = moment.unix(props.minCompletionDate);
    const dm = moment.unix(props.maxCompletionDate);
    const rt = moment().add(props.reviewTime * 1000);
    return (
        <ListGroup fill>
            <ListGroupItem>{ props.description }</ListGroupItem>
            <ListGroupItem><strong>URL: </strong>{ props.url }</ListGroupItem>
            <ListGroupItem>
                <strong>Valid date: </strong>
                { dn.format("ll") } - { dm.format("ll") }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Recipient: </strong>
                { props.milestoneLeadLink }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Reviewer: </strong>
                { props.reviewer }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Reviewer time: </strong>
                { rt.format("ll") }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Payment source address: </strong>
                { props.paymentSource }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Status: </strong>
                { props.status }
            </ListGroupItem>
            <ListGroupItem>
                <strong>Done time: </strong>
                { props.doneTime }
            </ListGroupItem>
        </ListGroup>
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
