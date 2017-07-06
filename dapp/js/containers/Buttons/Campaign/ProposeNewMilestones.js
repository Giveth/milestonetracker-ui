import { connect } from "react-redux";
import Component from "../../../components/ButtonProposeNewMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        proposeNewMilestones: CampaignActions.proposeNewMilestones,
    }
);

const ProposeNewMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ProposeNewMilestones;
