import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = state => ({
    dataLoaded: Object.keys(state.givethDirectory).length !== 0,
    campaigns: state.givethDirectory.campaigns,
});

const PageCampaign = connect(
    mapStateToProps,
    {},
)(Component);

export default PageCampaign;
