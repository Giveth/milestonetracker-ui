import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = state => ({
    givethDirectoryState: state.givethDirectory,
});

const PageCampaign = connect(
    mapStateToProps,
    {},
)(Component);

export default PageCampaign;
