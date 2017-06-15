import React from "react";
// import PropTypes from "prop-types";
import { ProgressBar, Grid, Row, Col, PageHeader } from "react-bootstrap";
import { Donate } from "../../Buttons";
import CampaignDetails from "../../../components/CampaignDetails";
import CampaignVault from "../../../components/CampaignVault";
import { network } from "../../../blockchain";

export default function Component(props) {
    let content = (
        <div>
            <h2>Loading campaign...</h2>
            <ProgressBar active now={100} />
        </div>
    );
    const id = Number.parseInt(props.match.params.campaignId, 10);
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
                          idCampaign={id}
                          campaignName={campaign.name}
                          disabled={campaign.status !== "Active"}
                        />
                    </span>
                </PageHeader>

                <CampaignDetails
                  campaign={campaign.token.controller}
                  url={campaign.url}
                  name={campaign.name}
                  description={campaign.description}
                  status={campaign.status}
                  tokenAddress={campaign.tokenAddress}
                  vaultAddress={campaign.vaultAddress}
                  milestoneTrackerAddress={campaign.milestoneTrackerAddress}
                  milestones={campaign.milestoneTracker.milestones}
                  token={campaign.token}
                  domain={network.etherscan}
                />

                <CampaignVault
                  owner={campaign.vault.owner}
                  escapeCaller={campaign.vault.escapeCaller}
                  escapeDestination={campaign.vault.escapeDestination}
                  balance={campaign.vault.balance.toNumber()}
                  payments={campaign.vault.payments}
                  domain={network.etherscan}
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
