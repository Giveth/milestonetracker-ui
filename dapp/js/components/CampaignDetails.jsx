/**
 * Shows basic details of the campaign
 */

import React from "react";
import PropTypes from "prop-types";

import { TableDetails } from "./";
import { network } from "../blockchain";

const CampaignDetails = (props) => {
    const general = [
        {
            label: "Donation / Token Contract Address",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.campaign.tokenAddress }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.campaign.tokenAddress}
                </a>
            ),
        },
        {
            label: "Milestone Tracker Address",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.campaign.milestoneTrackerAddress }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.campaign.milestoneTrackerAddress}
                </a>
            ),
        },
        {
            label: "Donor",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.campaign.milestoneTracker.donor }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.campaign.milestoneTracker.donor}
                </a>
            ),
        },
        {
            label: "Recipient",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.campaign.milestoneTracker.recipient }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.campaign.milestoneTracker.recipient}
                </a>
            ),
        },
        {
            label: "Arbitrator",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.campaign.milestoneTracker.arbitrator }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.campaign.milestoneTracker.arbitrator}
                </a>
            ),
        },
        {
            label: "Token Name",
            content: `${ props.campaign.token.name }`,
        },
        {
            label: "Website",
            content: (<a
              href={props.campaign.url}
              target="_blank"
              rel="noopener noreferrer"
            >
                {props.campaign.url}
            </a>),
        },
    ];

    return (
        <div>
            <p>{ props.campaign.description }</p>
            <TableDetails data={general} />
        </div>
    );
};

CampaignDetails.propTypes = {
    campaign: PropTypes.shape({
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        tokenAddress: PropTypes.string.isRequired,
        token: PropTypes.shape({
            name: PropTypes.string.isRequired,
            controller: PropTypes.string.isRequired,
        }),
        milestoneTrackerAddress: PropTypes.string.isRequired,
    }).isRequired,
};

export default CampaignDetails;
