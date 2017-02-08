import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import DateTimeField from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

class InputDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            valid: false,
            validationState: null,
        };
        this.hangleOnChange = this.hangleOnChange.bind(this);
    }
    hangleOnChange(date) {
        let newState;

        if (date instanceof moment && date.isValid()) {
            this.props.onChange(this.props.name, date.unix());
            newState = {
                value: date,
                valid: true,
                validationState: "success",
            };
        } else {
            newState = {
                value: date,
                valid: false,
                validationState: "error",
            };
        }
        this.setState(newState);
    }

    render() {
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <DateTimeField
                  id={this.props.name}
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  onChange={this.hangleOnChange}
                  value={this.state.value}
                />
            </FormGroup>
        );
    }
}

InputDate.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default InputDate;
