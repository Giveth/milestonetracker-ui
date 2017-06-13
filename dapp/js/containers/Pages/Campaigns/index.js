import { connect } from "react-redux";
import CampaignsPage from "./Component";

const mapStateToProps = state => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const PageCampaigns = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CampaignsPage);

export default PageCampaigns;
