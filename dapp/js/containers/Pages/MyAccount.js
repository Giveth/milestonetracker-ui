import { connect } from "react-redux";
import { MyAccount } from "../../components";

const mapStateToProps = state => ({
    givethDirectoryState: state.givethDirectory,
    web3state: state.web3,
});

const mapDispatchToProps = ({
});

const PageMyAccount = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyAccount);

export default PageMyAccount;
