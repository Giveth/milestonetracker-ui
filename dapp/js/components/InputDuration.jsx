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
        this.state = {
            unit: timeUnits[ 3 ],
            validationState: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
    }

    onChange(event) {
        this.inputChanged(event.target.value);
    }

    inputChanged(value) {
        let valid = isNumeric(value);
        let val = "";
        if (valid) {
            val = value * this.state.unit.unit;
        } else if (value !== "" && isNumeric(this.props.value)) {
            val = this.props.value;
            valid = true;
        }

        this.props.onChange(this.props.name, val, valid);

        this.setState({
            validationState: valid ? "success" : "error",
        });
    }

    unitChanged(unit) {
        return function changeUnit() {
            this.setState({ unit });
            this.inputChanged(this.props.value / this.state.unit.unit);
        }.bind(this);
    }

    render() {
        const durationButtons = timeUnits.map(unit => (
            <MenuItem
              key={unit.title}
              onClick={this.unitChanged(unit)}
            >
                { unit.title }
            </MenuItem>
        ));

        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup>
                    <FormControl
                      name={this.props.name}
                      placeholder={this.props.placeholder}
                      onChange={this.onChange}
                      value={isNumeric(this.props.value) ? this.props.value / this.state.unit.unit : ""}
                    />
                    <FormControl.Feedback />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title={this.state.unit.title}
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
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

InputDuration.defaultProps = {
    placeholder: "",
    value: "",
};

export default InputDuration;
