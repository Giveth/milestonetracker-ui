import React from "react";
import PropTypes from "prop-types";
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

    componentWillMount() {
        this.props.setValid(this.props.name, false);
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
    name: PropTypes.string.isRequired,
    // placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    // componentClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    // value: PropTypes.string,
    setValid: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
};

export default Input;
