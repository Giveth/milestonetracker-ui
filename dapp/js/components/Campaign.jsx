import React from "react";
import PropTypes from "prop-types";
import { BlockChainContent, CampaignDetails, CampaignHeader, CampaignVault } from "./";

const Campaign = (props) => {
    const id = Number.parseInt(props.match.params.campaignId, 10);
    let content = (
        <div>
            <h2>ERROR:</h2>
            <p>The campaign you tried to load is not in the Giveth Directory.</p>
        </div>
    );

    if (props.campaigns.length > id) {
        const campaign = props.campaigns[ id ];

        content = (
            <div>
                <CampaignHeader
                  campaign={campaign}
                  id={id}
                />

                <CampaignDetails
                  campaign={campaign}
                />

                <CampaignVault
                  vault={campaign.vault}
                />
            </div>
        );
    }

    return (
        <BlockChainContent
          loaded={props.loaded}
        >
            { content }
        </BlockChainContent>
    );
};

Campaign.propTypes = {
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
    loaded: PropTypes.bool.isRequired,
};

Campaign.defaultProps = {
    campaigns: [],
};

export default Campaign;
