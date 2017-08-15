import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Collect",
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickAction: MilestoneActions.collect,
    },
    dispatch,
);

const Collect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default Collect;
