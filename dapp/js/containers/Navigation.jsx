import { connect } from "react-redux";
import NavigationComponent from "../components/Navigation";

const mapStateToProps = state => ({
    web3state: state.web3,
});

const mapDispatchToProps = ({
});

const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationComponent);

export default Navigation;
