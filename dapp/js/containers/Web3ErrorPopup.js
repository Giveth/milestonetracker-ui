import { connect } from "react-redux";
import ErrorPopup from "../component/ErrorPopup";

const mapStateToProps = (state) => ({
    visible: !state.web3.connected,
});

const mapDispatchToProps = ({
});

const Web3ErrorPopup = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPopup);

export default Web3ErrorPopup;
