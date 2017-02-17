import { connect } from "react-redux";
import React from "react";
import { Table } from "react-bootstrap";
import { web3 } from "../blockchain";

function Component(props) {
    // console.log(props.web3state.accounts);
    const accounts = [];
    if (props.web3state && props.web3state.accounts) {
        for (let i = 0; i < props.web3state.accounts.length; ++i) {
            const acc = props.web3state.accounts[ i ];
            accounts.push(
                <tr key={i}>
                    <td>{ web3.fromWei(acc.balance, "ether").toNumber() } ETH</td>
                    <td>{ acc.address }</td>
                </tr>
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
}

Component.propTypes = {
    web3state: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    web3state: state.web3,
});

const mapDispatchToProps = ({
});

const MyAccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default MyAccountContainer;
