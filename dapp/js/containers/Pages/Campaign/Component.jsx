import React from "react";
import PropTypes from "prop-types";
import { ProgressBar, Grid, Row, Col, PageHeader } from "react-bootstrap";
import { Donate } from "../../Buttons";
import CampaignDetails from "../../../components/CampaignDetails";
import CampaignVault from "../../../components/CampaignVault";
import { network } from "../../../blockchain";

export default function Component(props) {
    const id = Number.parseInt(props.match.params.campaignId, 10);
    let content = (
        <div>
            <h2>Loading campaign...</h2>
            <ProgressBar active now={100} />
        </div>
    );
    if (props.dataLoaded) {
        if (props.campaigns.length > id) {
            const campaign = props.campaigns[ id ];

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
        } else {
            content = (
                <div>
                    <h2>ERROR:</h2>
                    <p>The campaign you tried to load is not in the Giveth Directory.</p>
                </div>
            );
        }
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
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        extra: PropTypes.string,
        url: PropTypes.string,
        name: PropTypes.string.isRequired,
    })),
    match: PropTypes.shape({
        params: PropTypes.shape({
            campaignId: PropTypes.string.isRequired,
        }),
    }).isRequired,
};

Component.defaultProps = {
    campaigns: [],
};
