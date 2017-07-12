import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Reject Completed",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.rejectCompleted,
    }
);

const RejectCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default RejectCompleted;
