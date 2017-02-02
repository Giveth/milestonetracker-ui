import React from "react";
import Form from "../components/Form";
import Text from "../components/Text";
import { connect } from "react-redux";
import * as a from "../actions";

const SmartFormComponent = (props) =>
    <Form>
        <Text
          name="name"
          placeholder="Type your name here"
          type="text"
          label="Your name"
          onChange={props.nameInputChange}
        />
    </Form>;

SmartFormComponent.propTypes = {
    nameInputChange: React.PropTypes.func,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    nameInputChange(event) {dispatch(a.onInputChange("name", event.target.value));} }
);

const SmartForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartFormComponent);

export default SmartForm;
