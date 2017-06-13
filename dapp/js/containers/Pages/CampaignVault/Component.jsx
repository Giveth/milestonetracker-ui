import React from "react";
import { Panel } from "react-bootstrap";
import CampaignVault from "../../../components/CampaignVault";
import { domain } from "../../../blockchain";

const Component = props => (
    <Panel>
        <CampaignVault
          owner={props.vault.owner}
          escapeCaller={props.vault.escapeCaller}
          escapeDestination={props.vault.escapeDestination}
          balance={props.vault.balance.toNumber()}
          payments={props.vault.payments}
          domain={domain}
        />
    </Panel>
);

Component.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
    // params: PropTypes.object.isRequired,
};

export default Component;
