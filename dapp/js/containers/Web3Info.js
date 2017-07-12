import { connect } from "react-redux";
import Web3InfoComponent from "../components/Web3InfoComponent";

const mapStateToProps = state => ({
    web3state: state.web3,
});

const mapDispatchToProps = ({
});

const Web3Info = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Web3InfoComponent);

export default Web3Info;
