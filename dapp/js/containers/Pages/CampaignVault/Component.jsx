import React from "react";
import { Panel } from "react-bootstrap";
import CampaignVault from "../../../components/CampaignVault";
import { domain } from "../../../blockchain";

export default function Component(props) {
    let content = "";
    const id = props.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const vault = props.givethDirectoryState.campaigns[ id ].vault;

        content = (
            <Panel>
                <CampaignVault
                  owner={ vault.owner }
                  escapeCaller={ vault.escapeCaller }
                  escapeDestination={ vault.escapeDestination }
                  balance={ vault.balance.toNumber() }
                  payments={ vault.payments }
                  domain={domain}
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
    givethDirectoryState: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
};
