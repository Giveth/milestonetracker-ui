import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonRejectMilestones from "../../../components/ButtonRejectMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
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
