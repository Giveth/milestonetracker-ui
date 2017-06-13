import { connect } from "react-redux";
import Component from "./Component";
import donate from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onDonate: donate,
    }
);

const Donate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default Donate;
