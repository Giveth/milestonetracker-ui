import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const GivethDirectory = connect(
    mapStateToProps,
    {}
)(Component);

export default GivethDirectory;
