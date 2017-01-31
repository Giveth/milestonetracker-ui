import { connect } from "react-redux";
import About from "./About";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});
const mapDispatchToProps = (
    {}
);

const PageAbout = connect(
    mapStateToProps,
    mapDispatchToProps
)(About);

export default PageAbout;
