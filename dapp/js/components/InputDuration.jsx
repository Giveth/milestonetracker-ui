import React from "react";
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
            unit: timeUnits[ 3 ].unit,
            title: timeUnits[ 3 ].title,
            value: props.value,
            valid: false,
        };
        this.change = this.change.bind(this);
    }
    change(event) {
        if (isNumeric(event.target.value)) {
            this.setState({ value: event.target.value });
            this.props.onChange(this.props.name, event.target.value * this.state.unit);
        } else if (event.target.value === "") {
            this.setState({ value: "" });
            this.props.onChange(this.props.name, 0);
        }
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
        for (let i = 0; i < timeUnits.length; ++i) {
            durationButtons.push(<MenuItem
              key={i}
              onClick={ this.unitChanged(i) }
            >{ timeUnits[ i ].title }</MenuItem>);
        }
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup>
                    <FormControl
                      name={this.props.name}
                      placeholder={this.props.placeholder}
                      onChange={this.change}
                      value={this.state.value}
                    />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title={ this.state.title }
                    >
                        { durationButtons }
                    </DropdownButton>
                </InputGroup>
            </FormGroup>
        );
    }
}

InputDuration.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default InputDuration;
