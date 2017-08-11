import React from "react";
import PropTypes from "prop-types";

import { network, web3 } from "../blockchain";
import { TableDetails } from "./";

// function calculateTokens(balances) {
//     if (Array.isArray(balances)) {
//         return balances.reduce((total, value) => total + value, 0);
//     }
//     return 0;
// }

const CampaignVault = (props) => {
    const data = [
        {
            label: "Vault Address",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vaultAddress }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vaultAddress}
                </a>
            ),
        },
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
            label: "Escape Hatch Caller's Address",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vault.escapeHatchCaller }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vault.escapeHatchCaller}
                </a>
            ),
        },
        {
            label: "Escape Hatch Destination",
            content: (
                <a
                  href={`${ network.etherscan }address/${ props.vault.escapeHatchDestination }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {props.vault.escapeHatchDestination}
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
    vaultAddress: PropTypes.string.isRequired,
    vault: PropTypes.shape({
        owner: PropTypes.string.isRequired,
        escapeHatchDestination: PropTypes.string.isRequired,
        escapeHatchCaller: PropTypes.string.isRequired,
        balance: PropTypes.oneOfType([ PropTypes.shape({
            c: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
            e: PropTypes.number.isRequired,
            s: PropTypes.number.isRequired,
        }), PropTypes.string ]).isRequired,
    }).isRequired,
};

export default CampaignVault;
