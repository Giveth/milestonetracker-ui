/**
 * Shows basic details of the campaign
 */

import React from "react";
import PropTypes from "prop-types";

import { TableDetails } from "./";

const CampaignDetails = (props) => {
    const general = [
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
    }).isRequired,
};

export default CampaignDetails;
