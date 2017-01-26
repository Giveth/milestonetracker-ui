import { connect } from "react-redux";
import ErrorPopupComponent from "../component/ErrorPopupComponent";

const mapStateToProps = (state) => ({
    visible: !state.web3.connected,
});

const mapDispatchToProps = ({
});

const Web3ErrorPopup = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPopupComponent);

export default Web3ErrorPopup;
