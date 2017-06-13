import React from "react";
// import PropTypes from "prop-types";
import { ProgressBar, Grid, Row, Col, PageHeader } from "react-bootstrap";
import { Donate } from "../../Buttons";
import { PageCampaignDetails, PageCampaignMilestones, PageCampaignVault } from "../";

export default function Component(props) {
    let content = (
        <div>
            <h2>Loading campaign...</h2>
            <ProgressBar active now={100} />
        </div>
    );
    const id = props.match.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const campaign = props.givethDirectoryState.campaigns[ id ];

        content = (
            <div>
                <PageHeader>
                    <a
                      href={campaign.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        {campaign.name}
                    </a> <small>{ campaign.status }</small>
                    <span className="pull-right">
                        <Donate
                          idCampaign={Number(props.match.params.campaignId)}
                          campaignName={campaign.name}
                          disabled={campaign.status !== "Active"}
                        />
                    </span>
                </PageHeader>

                <PageCampaignDetails
                  campaign={campaign}
                />
                <PageCampaignMilestones
                  campaign={campaign}
                />
                <PageCampaignVault
                  vault={campaign.vault}
                />
            </div>
        );
    }

    return (
        <Grid>
            <Row>
                <Col>{ content }</Col>
            </Row>
        </Grid>
    );
}

Component.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
    // params: PropTypes.object.isRequired,
};
