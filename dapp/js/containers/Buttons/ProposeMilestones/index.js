import { connect } from "react-redux";
import Component from "./Component";
import proposeMilestones from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onProposeMilestones: proposeMilestones,
    }
);

const ButtonProposeMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ButtonProposeMilestones;
