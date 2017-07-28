import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Approve Completed",
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickAction: MilestoneActions.approveCompleted,
    },
    dispatch,
);

const ApproveCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default ApproveCompleted;
