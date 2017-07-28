import { connect } from "react-redux";
import Component from "../components/MilestoneDetailEditable";
import * as actions from "../actions/milestoneActions";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    save: (data) => {
        dispatch(actions.saveMilestone(data));
    },
    remove: (milestoneTrackerAddress, id) => {
        dispatch(actions.removeMilestone(milestoneTrackerAddress, id));
    },
});

const MilestoneDetailEditable = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default MilestoneDetailEditable;
