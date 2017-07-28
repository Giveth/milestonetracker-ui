import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonRejectMilestones from "../../../components/ButtonRejectMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = state => ({
    disabled: !state.givethDirectory.loaded,
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        onUnproposeMilestones: CampaignActions.rejectMilestones,
    },
    dispatch,
);

const RejectMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonRejectMilestones);

export default RejectMilestones;
