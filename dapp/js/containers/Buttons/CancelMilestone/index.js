import { connect } from "react-redux";
import Component from "./Component";
import cancelMilestone from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onCancelMilestone: cancelMilestone,
    }
);

const CancelMilestone = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default CancelMilestone;
