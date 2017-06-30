import { connect } from "react-redux";
import { Campaigns } from "../../components";

const mapStateToProps = state => ({
    loaded: Object.keys(state.givethDirectory).length !== 0,
    campaigns: state.givethDirectory.campaigns,
});

const mapDispatchToProps = ({
});

const PageCampaigns = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Campaigns);

export default PageCampaigns;
