import { connect } from "react-redux";
import Component from "./Component";
import { approveCompletedMilestone } from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onCompleteMilestone: approveCompletedMilestone,
    }
);

const ApproveCompletedMilestone = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default ApproveCompletedMilestone;
