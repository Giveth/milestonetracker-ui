import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Cancel",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.cancel,
    }
);

const Cancel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default Cancel;
