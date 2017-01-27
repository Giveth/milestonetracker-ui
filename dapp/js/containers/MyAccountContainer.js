import { connect } from "react-redux";
import { MyAccountPage } from "../pages";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const MyAccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyAccountPage);

export default MyAccountContainer;
