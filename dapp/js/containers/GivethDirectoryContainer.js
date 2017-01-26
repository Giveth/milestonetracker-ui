import { connect } from "react-redux";
import { CampaignsPage } from "../pages";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const GivethDirectoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignsPage);

export default GivethDirectoryContainer;
