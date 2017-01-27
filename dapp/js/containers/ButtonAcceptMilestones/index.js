import { connect } from "react-redux";
import Component from "./Component";
import { acceptMilestones } from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onAcceptMilestones: acceptMilestones,
    }
);

const ButtonAcceptMilestones = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default ButtonAcceptMilestones;
