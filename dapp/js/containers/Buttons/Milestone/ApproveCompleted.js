import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Approve Completed",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.approveCompleted,
    }
);

const ApproveCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default ApproveCompleted;
