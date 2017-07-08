import { connect } from "react-redux";
import ButtonRejectMilestones from "../../../components/ButtonRejectMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onUnproposeMilestones: CampaignActions.rejectMilestones,
    }
);

const RejectMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonRejectMilestones);

export default RejectMilestones;
