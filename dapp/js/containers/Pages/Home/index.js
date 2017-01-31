import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const PageHome = connect(
    mapStateToProps,
    {}
)(Component);

export default PageHome;
