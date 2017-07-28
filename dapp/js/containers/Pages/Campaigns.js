import { connect } from "react-redux";
import { Campaigns } from "../../components";

const mapStateToProps = state => ({
    loaded: state.givethDirectory.loaded,
    campaigns: state.givethDirectory.campaigns,
});

const mapDispatchToProps = ({
});

const PageCampaigns = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Campaigns);

export default PageCampaigns;
