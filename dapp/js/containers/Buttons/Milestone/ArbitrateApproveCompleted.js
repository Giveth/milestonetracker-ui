import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Arbitrate Approve Completed",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.arbitrateApproveCompleted,
    }
);

const ArbitrateApproveCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default ArbitrateApproveCompleted;
