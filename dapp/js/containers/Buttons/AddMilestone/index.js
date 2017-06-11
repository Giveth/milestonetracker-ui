import { connect } from "react-redux";
import Component from "./Component";
import addMilestone from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onAddMilestone: addMilestone,
    }
);

const ButtonAddMilestone = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ButtonAddMilestone;
