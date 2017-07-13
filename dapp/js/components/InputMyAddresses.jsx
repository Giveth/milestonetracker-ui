import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class InputMyAddresses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationState: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.inputChanged(this.props.name);
    }

    onChange(event) {
        this.inputChanged(event.target.value);
    }

    inputChanged(value) {
        const valid = value >= 0 && value < this.props.accounts.length;
        this.props.onChange(this.props.name, value, valid);

        this.setState({
            validationState: valid ? "success" : "error",
        });
    }

    render() {
        const accounts = [ <option key="-1" value="-1">Choose an account</option> ];
        for (let i = 0; i < this.props.accounts.length; i += 1) {
            accounts.push(
                <option
                  key={i}
                  value={i}
                >
                    {this.props.accounts[ i ].address}
                </option>);
        }
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  componentClass="select"
                  onChange={this.onChange}
                >
                    {accounts}
                </FormControl>
            </FormGroup>
        );
    }
}

InputMyAddresses.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    accounts: PropTypes.arrayOf(PropTypes.shape({
        address: PropTypes.string.isRequired,
    })).isRequired,
};

InputMyAddresses.defaultProps = {
    placeholder: "",
};

export default InputMyAddresses;
