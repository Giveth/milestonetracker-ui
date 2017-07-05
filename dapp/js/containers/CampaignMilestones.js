import { connect } from "react-redux";
import Component from "../components/CampaignMilestones";

const mapStateToProps = state => ({
    newMilestones: state.newMilestones,
});

const mapDispatchToProps = ({
});

const CampaignMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default CampaignMilestones;
