import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validationState: null,
        };
        this.change = this.change.bind(this);
    }

    componentWillMount() {
        this.props.setValid(this.props.name, false);
    }

    change(event) {
        const val = event.target.value;
        if (val >= 0 && val < this.props.accounts.length) {
            this.props.onChange(this.props.name, this.props.accounts[ val ]);
            this.props.setValid(this.props.name, true);

            this.setState({
                validationState: "success",
            });
        } else {
            this.props.setValid(this.props.name, false);
            this.setState({
                validationState: "danger",
            });
        }
    }

    render() {
        const accounts = [ <option key="-1" value="-1">Choose an account</option> ];
        for (let i = 0; i < this.props.accounts.length; ++i) {
            accounts.push(
                <option
                  key={i}
                  value={i}
                >
                  {this.props.accounts[ i ].address}
                </option>);
        }
        return (
            <FormGroup validationState={this.state.validationState}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                  name={this.props.name}
                  placeholder={this.props.placeholder}
                  componentClass="select"
                  onChange={this.change}
                >
                    {accounts}
                </FormControl>
            </FormGroup>
        );
    }
}

Component.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    componentClass: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    setValid: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    accounts: state.web3.accounts,
});

const mapDispatchToProps = (
    {
    }
);

const InputMyAddresses = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default InputMyAddresses;
