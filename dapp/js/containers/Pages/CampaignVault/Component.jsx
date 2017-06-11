import React from "react";
// import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";
import CampaignVault from "../../../components/CampaignVault";

export default function Component(props) {
    let content = "";
    const id = props.match.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const vault = props.givethDirectoryState.campaigns[ id ].vault;

        content = (
            <Panel>
                <CampaignVault
                  owner={vault.owner}
                  escapeCaller={vault.escapeCaller}
                  escapeDestination={vault.escapeDestination}
                  balance={vault.balance.toNumber()}
                  payments={vault.payments}
                />
            </Panel>
        );
    }

    return (
        <div>
            { content }
        </div>
    );
}

Component.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
    // params: PropTypes.object.isRequired,
};
