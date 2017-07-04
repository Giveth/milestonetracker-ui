import React from "react";
import PropTypes from "prop-types";

import * as Buttons from "../containers/Buttons/Campaign";

const CampaignHeader = props => (
    <h2>
        <a
          href={props.campaign.url}
          target="_blank"
          rel="noopener noreferrer"
        >
            {props.campaign.name}
        </a>
        <span className="pull-right">
            <Buttons.Donate
              idCampaign={props.id}
              campaignName={props.campaign.name}
              disabled={props.campaign.status !== "Active"}
            />
        </span>
    </h2>
);

CampaignHeader.propTypes = {
    campaign: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
};

export default CampaignHeader;
