import React from "react";
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
            unit: "ether",
            title: "Ether",
            value: props.value,
        };
        this.change = this.change.bind(this);
    }
    change(event) {
        if (isNumeric(event.target.value)) {
            this.setState({ value: event.target.value });
            this.props.onChange(this.props.name, web3.toWei(event.target.value, this.state.unit));
        } else if (event.target.value === "") {
            this.setState({ value: event.target.value });
            this.props.onChange(this.props.name, 0);
        }
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
        for (let i = 0; i < etherUnits.length; ++i) {
            unitsButtons.push(<MenuItem
              key={i}
              onClick={ this.unitChanged(i) }
            >{ etherUnits[ i ].title }</MenuItem>);
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
                        { unitsButtons }
                    </DropdownButton>
                </InputGroup>
            </FormGroup>
        );
    }
}

InputEther.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default InputEther;
