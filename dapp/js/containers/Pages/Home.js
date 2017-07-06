import { connect } from "react-redux";
import { Home } from "../../components";

const mapStateToProps = state => ({
    fullState: state,
});

const PageHome = connect(
    mapStateToProps,
    {},
)(Home);

export default PageHome;
