import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const NoAccountWarning = (props) => {
    const style = {
        bottom: "0px",
        textAlign: "center",
        position: "fixed",
        margin: 0,
        left: "50%",
        transform: "translate(-50%, 0%)",
    };

    // Some accounts
    if (props.accounts.length > 0) return null;

    return (
        <Alert bsStyle="warning" style={style}>
            <p>
                <strong>No Ethereum accounts found.</strong>
                To be able to interact with the Giveth Dapp,
                you have to unlocked your MetaMask vault and refresh the page.
            </p>
        </Alert>
    );
};

NoAccountWarning.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.shape({
        address: PropTypes.string.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({
    accounts: state.web3.accounts,
});

export default connect(mapStateToProps)(NoAccountWarning);
