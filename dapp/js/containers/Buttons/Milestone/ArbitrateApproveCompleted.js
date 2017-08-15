import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Arbitrate Approve Completed",
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickAction: MilestoneActions.arbitrateApproveCompleted,
    },
    dispatch,
);

const ArbitrateApproveCompleted = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default ArbitrateApproveCompleted;
