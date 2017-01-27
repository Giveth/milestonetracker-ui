import { connect } from "react-redux";
import DeployContract from "../components/DeployContract";
import { proposeMilestones } from "../actions";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = (dispatch) => ({
    handleOnClick() {
        dispatch(proposeMilestones());
    },
});

const DeployContractContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeployContract);

export default DeployContractContainer;
