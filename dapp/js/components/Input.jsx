import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationState: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.inputChanged(this.props.value, true);
    }

    onChange(event) {
        this.inputChanged(event.target.value);
    }

    inputChanged(value) {
        const valid = this.props.validate(value);
        this.props.onChange(this.props.name, value, valid);

        this.setState({
            validationState: valid ? "success" : "error",
        });
    }

    render() {
        return (
            <FormGroup validationState={this.state.validationState}>
                {this.props.label ? <ControlLabel>{this.props.label}</ControlLabel> : ""}
                <FormControl
                  name={this.props.name}
                  componentClass={this.props.componentClass}
                  placeholder={this.props.placeholder}
                  onChange={this.onChange}
                  value={this.props.value}
                />
            </FormGroup>
        );
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
    componentClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func.isRequired,
};

Input.defaultProps = {
    placeholder: "",
    value: "",
    componentClass: "input",
    label: false,
};

export default Input;
