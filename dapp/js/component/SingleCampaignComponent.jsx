import React from "react";

import { Grid, Row, Col } from "react-bootstrap";

export default function SingleCampaignComponent(props) {
    let campaign = "";
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= props.params.campaignId - 1) {
        campaign = <pre> {JSON.stringify(props.givethDirectoryState.campaigns[ 0 ], null, 2)}</pre>;
    }

    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        { campaign }
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

SingleCampaignComponent.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
};
