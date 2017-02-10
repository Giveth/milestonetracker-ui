import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            validationState: null,
        };
        this.change = this.change.bind(this);
    }

    change(event) {
        if (this.props.validate(event.target.value)) {
            this.props.onChange(this.props.name, event.target.value);
            this.props.setValid(this.props.name, true);
            this.setState({
                value: event.target.value,
                validationState: "success",
            });
        } else {
            this.props.setValid(this.props.name, false);
            this.setState({
                value: event.target.value,
                validationState: "error",
            });
        }
    }

    render() {
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                  name={this.props.name}
                  componentClass={this.props.componentClass}
                  placeholder={this.props.placeholder}
                  onChange={this.change}
                  value={this.value}
                />
            </FormGroup>
        );
    }
}

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    componentClass: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    setValid: React.PropTypes.func.isRequired,
    validate: React.PropTypes.func.isRequired,
};

export default Input;
