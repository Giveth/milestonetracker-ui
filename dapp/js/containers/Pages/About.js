import { connect } from "react-redux";
import { About } from "../../components";

const mapStateToProps = state => ({
    givethDirectoryState: state.givethDirectory,
});
const mapDispatchToProps = (
    {}
);

const PageAbout = connect(
    mapStateToProps,
    mapDispatchToProps,
)(About);

export default PageAbout;
