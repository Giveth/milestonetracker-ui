import { connect } from "react-redux";
import ButtonAcceptMilestones from "../../../components/ButtonAcceptMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onAcceptMilestones: CampaignActions.acceptMilestones,
    }
);

const AcceptMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonAcceptMilestones);

export default AcceptMilestones;
