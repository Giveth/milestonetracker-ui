import { connect } from "react-redux";
import SingleCampaignPage from "../pages/SingleCampaignPage";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const SingleCampaignContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCampaignPage);

export default SingleCampaignContainer;
