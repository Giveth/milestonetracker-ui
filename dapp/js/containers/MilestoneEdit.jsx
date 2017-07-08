import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Input from "../components/Input";
import InputDate from "../components/InputDate";
import InputEther from "../components/InputEther";
import InputDuration from "../components/InputDuration";
import * as a from "../actions";
import * as validator from "../validators";

class MilestoneEditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            inputsValidity: {},
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValidityChange = this.handleValidityChange.bind(this);
    }

    componentDidMount() {
        this.props.handleValidityChange(this.props.index, false);
    }

    componentWillUnmount() {
        this.props.removeValidityCheck(this.props.index);
    }

    handleInputChange(name, value) {
        this.props.onInputChange(this.props.milestoneTrackerAddress, this.props.index, name, value);
    }

    handleValidityChange(name, val) {
        const validationArray = Object.assign({}, this.state.inputsValidity);
        validationArray[ name ] = val;
        this.setState({ inputsValidity: validationArray });

        if (val) {
            Object.keys(validationArray).forEach((key) => {
                if (!validationArray[ key ]) {
                    this.setState({ valid: false });
                    this.props.handleValidityChange(this.props.index, false);
                    return;
                }

                this.setState({ valid: true });
                this.props.handleValidityChange(this.props.index, true);
            });
        } else {
            this.setState({ valid: false });
            this.props.handleValidityChange(this.props.index, false);
        }
    }

    render() {
        return (
            <div>
                <Input
                  name="payDescription"
                  componentClass="input"
                  label="Title"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payDescription}
                  validate={validator.any}
                />
                <Input
                  name="description"
                  componentClass="textarea"
                  label="Description"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.description}
                  validate={validator.any}
                />
                <Input
                  name="url"
                  componentClass="input"
                  label="url"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.url}
                  validate={validator.website}
                />
                <InputDate
                  name="minCompletionDate"
                  label="minCompletionDate"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.minCompletionDate}
                />
                <InputDate
                  name="maxCompletionDate"
                  label="maxCompletionDate"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.maxCompletionDate}
                />
                <Input
                  name="reviewer"
                  componentClass="input"
                  label="Reviewer"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.reviewer}
                  validate={validator.ethereumAddress}
                />
                <Input
                  name="milestoneLeadLink"
                  componentClass="input"
                  label="milestoneLeadLink"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.milestoneLeadLink}
                  validate={validator.ethereumAddress}
                />
                <InputDuration
                  name="reviewTime"
                  label="Review time"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.reviewTime}
                />
                <Input
                  name="paymentSource"
                  componentClass="input"
                  label="Payment source"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.paymentSource}
                  validate={validator.ethereumAddress}
                />
                <Input
                  name="payRecipient"
                  componentClass="input"
                  label="Payment recipient"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payRecipient}
                  validate={validator.ethereumAddress}
                />
                <InputEther
                  name="payValue"
                  label="Payment amount"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payValue}
                />
                <InputDuration
                  name="payDelay"
                  label="Payment delay"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payDelay}
                />
            </div>
        );
    }
}

MilestoneEditComponent.propTypes = {
    milestoneTrackerAddress: PropTypes.string.isRequired,
    handleValidityChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    removeValidityCheck: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    payDescription: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    minCompletionDate: PropTypes.number.isRequired,
    maxCompletionDate: PropTypes.number.isRequired,
    reviewer: PropTypes.string.isRequired,
    milestoneLeadLink: PropTypes.string.isRequired,
    reviewTime: PropTypes.number.isRequired,
    paymentSource: PropTypes.string.isRequired,
    payRecipient: PropTypes.string.isRequired,
    payValue: PropTypes.number.isRequired,
    payDelay: PropTypes.number.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
    onInputChange: a.onInputChange,
};

const MilestoneEdit = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MilestoneEditComponent);

export default MilestoneEdit;
