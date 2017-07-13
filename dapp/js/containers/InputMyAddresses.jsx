import { connect } from "react-redux";
import Component from "../components/InputMyAddresses";

const mapStateToProps = state => ({
    accounts: state.web3.accounts,
});

const mapDispatchToProps = (
    {
    }
);

const InputMyAddresses = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default InputMyAddresses;
