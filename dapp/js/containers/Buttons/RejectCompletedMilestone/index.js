import { connect } from "react-redux";
import Component from "./Component";
import { rejectCompletedMilestone } from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onRejectCompletedMilestone: rejectCompletedMilestone,
    }
);

const RejectCompletedMilestone = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default RejectCompletedMilestone;
