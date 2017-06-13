import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = state => ({
    fullState: state,
});

const PageHome = connect(
    mapStateToProps,
    {},
)(Component);

export default PageHome;
