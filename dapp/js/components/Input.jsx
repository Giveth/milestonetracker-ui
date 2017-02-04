import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Input(props) {
    const change = (event) =>
        props.onChange(props.name, event.target.value);

    return (
        <FormGroup>
            <ControlLabel>{props.label}</ControlLabel>
            <FormControl
              componentClass={props.componentClass}
              placeholder={props.placeholder}
              onChange={change}
              value={props.value}
            />
        </FormGroup>
    );
}

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    componentClass: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    milestoneTrackerAddress: React.PropTypes.string,
    index: React.PropTypes.number,
};

export default Input;
