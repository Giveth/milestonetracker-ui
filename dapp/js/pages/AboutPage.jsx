import React from "react";

import { Grid, Row, Col, Button } from "react-bootstrap";

export default function AboutPage(props) {
    const handleProposeMilestones = () => {
        props.onProposeMilestones(
            props.givethDirectoryState.campaigns[ 0 ]
            .milestoneTrackerAddress, [
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
            ]
        );
    };

    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        <h1>About</h1>
                        <Button onClick={ handleProposeMilestones } />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

AboutPage.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
    onProposeMilestones: React.PropTypes.func.isRequired,
};
