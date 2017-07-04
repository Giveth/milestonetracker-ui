import React from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, InputGroup,
         DropdownButton, MenuItem } from "react-bootstrap";
import { web3 } from "../blockchain";

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const etherUnits = [
    { unit: "wei", title: "Wei" },
    { unit: "kwei", title: "Kilowei" },
    { unit: "mwei", title: "Megawei" },
    { unit: "szabo", title: "Szabo" },
    { unit: "finney", title: "Finney" },
    { unit: "ether", title: "Ether" },
    { unit: "kether", title: "Kiloether" },
    { unit: "mether", title: "Megaether" },
    { unit: "gether", title: "Gigaether" },
    { unit: "tether", title: "Teraether" },
];

class InputEther extends React.Component {
    constructor(props) {
        super(props);
        const val = props.value ? web3.fromWei(props.value, etherUnits[ 5 ].unit) : props.value;
        this.state = {
            unit: etherUnits[ 5 ].unit,
            title: etherUnits[ 5 ].title,
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
            this.props.onChange(this.props.name, web3.toWei(event.target.value, this.state.unit));
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
                unit: etherUnits[ i ].unit,
                title: etherUnits[ i ].title,
            });
            this.props.onChange(this.props.name,
                web3.toWei(this.state.value, etherUnits[ i ].unit));
        }.bind(this);
    }

    render() {
        const unitsButtons = [ ];
        for (let i = 0; i < etherUnits.length; i += 1) {
            unitsButtons.push(<MenuItem
              key={i}
              onClick={this.unitChanged(i)}
            >{ etherUnits[ i ].title }</MenuItem>);
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
                        { unitsButtons }
                    </DropdownButton>
                </InputGroup>
            </FormGroup>
        );
    }
}

InputEther.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    setValid: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

InputEther.defaultProps = {
    placeholder: "",
    onChange: function onChange() {},
    setValid: function setValid() {},
    value: "",
};

export default InputEther;
