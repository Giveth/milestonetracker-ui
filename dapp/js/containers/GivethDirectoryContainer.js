import { connect } from "react-redux";
import GivethDirectoryComponent from "../component/GivethDirectoryComponent";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const GivethDirectoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GivethDirectoryComponent);

export default GivethDirectoryContainer;
