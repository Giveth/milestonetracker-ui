import React from "react";
import { FormGroup, ControlLabel, FormControl, InputGroup,
         DropdownButton, MenuItem } from "react-bootstrap";
import { web3 } from "../blockchain";

const accountsConversions = [
    { convFunction: web3.eth.iban.fromAddress, title: "Address" },
    { convFunction: web3.eth.iban, title: "IBAN" },
    { convFunction: web3.eth.iban.fromBban, title: "BBAN" },
];

class InputAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            convFunction: accountsConversions[ 0 ].convFunction,
            title: accountsConversions[ 0 ].title,
            value: props.value,
            validationState: null,
        };
        this.change = this.change.bind(this);
    }
    handleChange(val, convFunction) {
        let account = "";
        let ibanValid = "error";

        try {
            account = convFunction(val);
            if (account.isValid()) {
                ibanValid = "success";
                this.props.onChange(this.props.name, `0x${ account.address() }`);
            }
        } catch (e) {
            console.log(e.msg);
        }
        this.setState({
            value: val,
            validationState: val ? ibanValid : null,
        });
    }

    change(event) {
        this.handleChange(event.target.value, this.state.convFunction);
    }

    unitChanged(i) {
        return function changeUnit() {
            this.setState({
                convFunction: accountsConversions[ i ].convFunction,
                title: accountsConversions[ i ].title,
            });
            this.handleChange(this.state.value, accountsConversions[ i ].convFunction);
        }.bind(this);
    }

    render() {
        const accButtons = [ ];
        for (let i = 0; i < accountsConversions.length; ++i) {
            accButtons.push(<MenuItem
              key={i}
              onClick={ this.unitChanged(i) }
            >{ accountsConversions[ i ].title }</MenuItem>);
        }

        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup>
                    <FormControl
                      name={this.props.name}
                      placeholder={this.props.placeholder}
                      onChange={this.change}
                      value={this.state.value}
                    />
                    <FormControl.Feedback />
                    <DropdownButton
                      componentClass={InputGroup.Button}
                      id="input-dropdown-addon"
                      title={ this.state.title }
                    >
                        { accButtons }
                    </DropdownButton>
                </InputGroup>
            </FormGroup>
        );
    }
}

InputAddress.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
};

export default InputAddress;
