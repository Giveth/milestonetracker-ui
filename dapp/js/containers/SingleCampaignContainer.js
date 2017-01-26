import { connect } from "react-redux";
import SingleCampaignComponent from "../component/SingleCampaignComponent";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const SingleCampaignContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCampaignComponent);

export default SingleCampaignContainer;
