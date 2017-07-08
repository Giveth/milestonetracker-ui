import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Collect",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.collect,
    }
);

const Collect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default Collect;
