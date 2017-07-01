import React from "react";
import PropTypes from "prop-types";

import { network, web3 } from "../blockchain";
import { TableDetails } from "./";

const CampaignVault = (props) => {
    const data = [
        {
            label: "Owner",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vault.owner }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vault.owner}
                </a>
            ),
        },
        {
            label: "Escape Caller's Address",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vault.escapeCaller }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vault.escapeCaller}
                </a>
            ),
        },
        {
            label: "Escape Destination",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vault.escapeDestination }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vault.escapeDestination}
                </a>
            ),
        },
        {
            label: "Balance",
            content: `${ web3.fromWei(props.vault.balance, "ether") } ETH`,
        },
    ];

    return (
        <div>
            <h3>Vault</h3>
            <TableDetails data={data} />
        </div>
    );
};

CampaignVault.propTypes = {
    vault: PropTypes.shape({
        owner: PropTypes.string.isRequired,
        escapeDestination: PropTypes.string.isRequired,
        escapeCaller: PropTypes.string.isRequired,
        balance: PropTypes.shape({
            c: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
            e: PropTypes.number.isRequired,
            s: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default CampaignVault;
