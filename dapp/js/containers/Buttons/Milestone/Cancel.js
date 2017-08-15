import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Cancel",
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        clickAction: MilestoneActions.cancel,
    },
    dispatch,
);

const Cancel = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default Cancel;
