/**
 *
 *
 */
import React from "react";

import { Grid, Row, Col, Table } from "react-bootstrap";

export default function SingleCampaignComponent(props) {
    let campaign = "Loading....";
    let campaignInfo = "";
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= props.params.campaignId - 1) {
        const currentCampaign = props.givethDirectoryState.campaigns[ 0 ];
        campaign = (<div>
            <h2><a href={ currentCampaign.url } target="_blank">{ currentCampaign.name }</a></h2>
            <p>{ currentCampaign.description }</p>
            { /* <pre> {JSON.stringify(currentCampaign, null, 2)}</pre> */ }
        </div>);

        campaignInfo = (
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Website</td>
                        <td>
                            <a
                              href={ currentCampaign.url }
                              target="_blank"
                            >
                            { currentCampaign.url }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>MiniMe Token Address</td>
                        <td>{ currentCampaign.token }</td>
                    </tr>
                    <tr>
                        <td>Vault Address</td>
                        <td>{ currentCampaign.vault }</td>
                    </tr>
                    <tr>
                        <td>MilestoneTracker Address</td>
                        <td>{ currentCampaign.milestoneTracker }</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{ currentCampaign.status }</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        { campaign }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { campaignInfo }
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
