import React from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import DateTimeField from "react-datetime";
// import momentLocalizer from "react-widgets/lib/localizers/moment";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

// momentLocalizer(moment);

function InputDate(props) {
    const change = (date) =>
        props.onChange(props.name, date.unix());

    return (
        <FormGroup>
            <ControlLabel>{props.label}</ControlLabel>
            <DateTimeField
              id={props.name}
              name={props.name}
              placeholder={props.placeholder}
              onChange={change}
              value={moment.unix(props.value)}
            />
        </FormGroup>
    );
}

InputDate.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.number,
};

export default InputDate;
