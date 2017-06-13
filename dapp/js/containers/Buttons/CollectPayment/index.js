import { connect } from "react-redux";
import Component from "./Component";
import collectPayment from "./actions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onCollectPayment: collectPayment,
    }
);

const ButtonCollectPayment = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component);

export default ButtonCollectPayment;
