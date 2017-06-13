import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel, DropdownButton,
         MenuItem, InputGroup } from "react-bootstrap";

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const timeUnits = [
    { unit: 1, title: "Seconds" },
    { unit: 60, title: "Minutes" },
    { unit: 3600, title: "Hours" },
    { unit: 86400, title: "Days" },
];

class InputDuration extends React.Component {
    constructor(props) {
        super(props);
        const val = props.value ? props.value / timeUnits[ 3 ].unit : props.value;
        this.state = {
            unit: timeUnits[ 3 ].unit,
            title: timeUnits[ 3 ].title,
            value: val,
            validationState: null,
        };
        this.hangleOnChange = this.hangleOnChange.bind(this);
    }

    componentWillMount() {
        this.props.setValid(this.props.name, false);
    }

    hangleOnChange(event) {
        let newState;

        if (isNumeric(event.target.value)) {
            this.props.onChange(this.props.name, event.target.value * this.state.unit);
            newState = {
                value: event.target.value,
                validationState: "success",
            };
            this.props.setValid(this.props.name, true);
        } else {
            newState = {
                value: event.target.value,
                validationState: "error",
            };
            this.props.setValid(this.props.name, false);
        }
        this.setState(newState);
    }

    unitChanged(i) {
        return function changeUnit() {
            this.setState({
                unit: timeUnits[ i ].unit,
                title: timeUnits[ i ].title,
            });
            this.props.onChange(this.props.name, this.state.value * timeUnits[ i ].unit);
        }.bind(this);
    }

    render() {
        const durationButtons = [ ];
        for (let i = 0; i < timeUnits.length; i += 1) {
            durationButtons.push(<MenuItem
              key={i}
              onClick={this.unitChanged(i)}
            >{ timeUnits[ i ].title }</MenuItem>);
        }
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup>
                    <FormControl
                      name={this.props.name}
                      placeholder={this.props.placeholder}
                      onChange={this.hangleOnChange}
                      value={this.state.value}
                    />
                    <FormControl.Feedback />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title={this.state.title}
                    >
                        { durationButtons }
                    </DropdownButton>
                </InputGroup>
            </FormGroup>
        );
    }
}

InputDuration.propTypes = {
    name: PropTypes.string.isRequired,
    // placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    // onChange: PropTypes.func,
    // setValid: PropTypes.func,
    // value: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.number,
    // ]),
};

export default InputDuration;
