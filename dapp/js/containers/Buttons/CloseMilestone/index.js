import { connect } from "react-redux";
import Component from "./Component";
import { onCancelNewMilestone } from "../../../actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        cancelMilestone: onCancelNewMilestone,
    }
);

const ButtonCancelMilestone = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default ButtonCancelMilestone;
