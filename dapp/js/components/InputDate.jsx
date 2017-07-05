import React from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel } from "react-bootstrap";
import DateTimeField from "react-datetime";
import moment from "moment";
import MomentTypes from "react-moment-proptypes";
import "react-datetime/css/react-datetime.css";

class InputDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationState: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.inputChanged(this.props.value);
    }

    onChange(date) {
        this.inputChanged(date);
    }

    inputChanged(date) {
        const valid = date instanceof moment && date.isValid();
        this.props.onChange(this.props.name, date, valid);

        this.setState({
            validationState: valid ? "success" : "error",
        });
    }

    render() {
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <DateTimeField
                  id={this.props.name}
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  onChange={this.onChange}
                  value={this.props.value}
                />
            </FormGroup>
        );
    }
}

InputDate.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        MomentTypes.momentObj,
    ]),
};

InputDate.defaultProps = {
    placeholder: "",
    value: "",
};

export default InputDate;
