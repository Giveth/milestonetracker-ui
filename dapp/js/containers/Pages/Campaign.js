import { connect } from "react-redux";
import { Campaign } from "../../components";

const mapStateToProps = state => ({
    loaded: Object.keys(state.givethDirectory).length !== 0,
    campaigns: state.givethDirectory.campaigns,
});

const PageCampaign = connect(
    mapStateToProps,
    {},
)(Campaign);

export default PageCampaign;
