import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Text = (props) =>
    <FormGroup>
        <ControlLabel>{props.label}</ControlLabel>
        <FormControl
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
    </FormGroup>;

Text.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    onChange: React.PropTypes.func,
};

export default Text;
