import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Component from "../../../components/ButtonProposeNewMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        proposeNewMilestones: CampaignActions.proposeNewMilestones,
    },
    dispatch,
);

const ProposeNewMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ProposeNewMilestones;
