import { connect } from "react-redux";
import Web3Info from "./Web3Info";

const mapStateToProps = state => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const MyAccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Web3Info);

export default MyAccountContainer;
