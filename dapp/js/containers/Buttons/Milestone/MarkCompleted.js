import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Mark Completed",
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickAction: MilestoneActions.markCompleted,
    },
    dispatch,
);

const MarkCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default MarkCompleted;
