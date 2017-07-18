import { connect } from "react-redux";
import Component from "../components/CampaignMilestones";

const getCampaignMilestones = (milestones, milestoneTrackerAddress) =>
    milestones[ milestoneTrackerAddress ] || { valid: true, milestones: [] };

const mapStateToProps = (state, props) => ({
    newMilestones: getCampaignMilestones(
        state.newMilestones,
        props.milestoneTrackerAddress,
    ),
    accounts: state.web3.accounts,
});

const mapDispatchToProps = ({});

const CampaignMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default CampaignMilestones;
