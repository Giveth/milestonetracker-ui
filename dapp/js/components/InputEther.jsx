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
        this.state = {
            unit: etherUnits[ 5 ],
            validationState: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        const val = this.props.value;
        this.props.onChange(this.props.name, val, isNumeric(val));
    }

    onChange(event) {
        this.inputChanged(event.target.value);
    }

    inputChanged(value) {
        let valid = isNumeric(value);
        let val = "";
        if (valid) {
            val = web3.toWei(value, this.state.unit.unit);
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
            this.inputChanged(web3.fromWei(this.props.value, this.state.unit.unit));
        }.bind(this);
    }

    render() {
        const unitsButtons = etherUnits.map(unit => (
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
                      value={isNumeric(this.props.value) ? web3.fromWei(this.props.value, this.state.unit.unit) : ""}
                    />
                    <FormControl.Feedback />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title={this.state.unit.title}
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

InputEther.defaultProps = {
    placeholder: "",
    onChange: function onChange() {},
    value: "",
};

export default InputEther;
