import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { web3 } from "../blockchain";

const MyAccount = (props) => {
    const accounts = [];
    if (props.web3state && props.web3state.accounts) {
        for (let i = 0; i < props.web3state.accounts.length; i += 1) {
            const acc = props.web3state.accounts[ i ];
            accounts.push(
                <tr key={i}>
                    <td>{ web3.fromWei(acc.balance, "ether").toNumber() } ETH</td>
                    <td>{ acc.address }</td>
                </tr>,
            );
        }
    }

    return (
        <div>
            <h2>Accounts:</h2>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Account</th>
                    </tr>
                </thead>
                <tbody>
                    { accounts }
                </tbody>
            </Table>
        </div>
    );
};

MyAccount.propTypes = {
    web3state: PropTypes.shape({
        accounts: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
};

export default MyAccount;
