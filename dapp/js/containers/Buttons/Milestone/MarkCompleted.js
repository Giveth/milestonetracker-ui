import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Mark Completed",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.markCompleted,
    }
);

const MarkCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default MarkCompleted;
