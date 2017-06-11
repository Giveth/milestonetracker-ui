import { connect } from "react-redux";
import Component from "./Component";
import completeMilestone from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onCompleteMilestone: completeMilestone,
    }
);

const ButtonMarkMilestoneComplete = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ButtonMarkMilestoneComplete;
