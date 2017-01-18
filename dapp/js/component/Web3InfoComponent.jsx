import React from "react";

export default function Web3InfoComponent(props) {
    let content;
    let syncinfo;
    let accounts;
    let blockinfo;
    if (!props.web3state.connected) {
        content = <div> Disconnected </div>;
    } else {
        accounts = props.web3state.accounts.map((account) =>
            (<li key={account.account}>
                <div>
                    {account.account}
                </div>
                <div>
                    {account.balance.div(1e18).toNumber().toFixed(2)}
                </div>
            </li>));
        if (props.web3state.syncing) {
            syncinfo = (
                <dl>
                    <dt> Starting Block </dt>
                    <dd> {props.web3state.syncStartingBlock} </dd>
                    <dt> Current Block </dt>
                    <dd> {props.web3state.syncCurrentBlock} </dd>
                    <dt> Highest Block </dt>
                    <dd> {props.web3state.syncHighestBlock} </dd>
                </dl>
            );
        } else {
            content = (
                <div> Ready </div>
            );
        }
        blockinfo = <div> Block #: {props.web3state.block.number} </div>;
    }
    return (
        <div className="Web3InfoComponent">
            {content}
            {syncinfo}
            {blockinfo}
            {accounts}
        </div>
    );
}

Web3InfoComponent.propTypes = {
    web3state: React.PropTypes.object.isRequired,
};
