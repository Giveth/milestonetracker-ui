import React from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel } from "react-bootstrap";
import DateTimeField from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

class InputDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            validationState: null,
        };
        this.hangleOnChange = this.hangleOnChange.bind(this);
    }

    componentWillMount() {
        this.props.setValid(this.props.name, false);
    }

    hangleOnChange(date) {
        let newState;

        if (date instanceof moment && date.isValid()) {
            this.props.onChange(this.props.name, date.unix());
            newState = {
                value: date,
                validationState: "success",
            };
            this.props.setValid(this.props.name, true);
        } else {
            newState = {
                value: date,
                validationState: "error",
            };
            this.props.setValid(this.props.name, false);
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
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    setValid: PropTypes.func.isRequired,
};

export default InputDate;
