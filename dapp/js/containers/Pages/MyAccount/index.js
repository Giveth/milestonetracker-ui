import { connect } from "react-redux";
import MyAccount from "./MyAccount";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const PageMyAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccount);

export default PageMyAccount;
