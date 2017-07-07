import { connect } from "react-redux";
import MilestoneButton from "../../../components/MilestoneButton";
import * as MilestoneActions from "../../../actions/milestoneActions";

const mapStateToProps = () => ({
    title: "Request Payment",
});

const mapDispatchToProps = (
    {
        clickAction: MilestoneActions.requestPayment,
    }
);

const RequestPayment = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneButton);

export default RequestPayment;
