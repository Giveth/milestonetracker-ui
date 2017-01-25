import { connect } from "react-redux";
import GivethDirectoryComponent from "../component/GivethDirectoryComponent";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const mapDispatchToProps = ({
});

const GivethDirectory = connect(
    mapStateToProps,
    mapDispatchToProps
)(GivethDirectoryComponent);

export default GivethDirectory;
