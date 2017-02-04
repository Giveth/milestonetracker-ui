import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
    formReducer: state.formReducer,
});

const PageCampaignMilestones = connect(
    mapStateToProps,
    {}
)(Component);

export default PageCampaignMilestones;
