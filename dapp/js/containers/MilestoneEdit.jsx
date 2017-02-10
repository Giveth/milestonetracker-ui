import React from "react";
import Input from "../components/Input";
import InputAddress from "../components/InputAddress";
import InputDate from "../components/InputDate";
import InputEther from "../components/InputEther";
import InputDuration from "../components/InputDuration";
import { connect } from "react-redux";
import * as a from "../actions";

const websiteValidator =
    RegExp(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/);

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
    handleInputChange(name, value) {
        this.props.onInputChange(this.props.milestoneTrackerAddress, this.props.index, name, value);
    }

    handleValidityChange(name, val) {
        const validationArray = Object.assign({}, this.state.inputsValidity);
        validationArray[ name ] = val;
        this.setState({ inputsValidity: validationArray });

        if (val) {
            for (const key in validationArray) {
                if (!validationArray[ key ]) {
                    this.setState({ valid: false });
                    this.props.handleValidityChange(this.props.index, false);
                    break;
                }
                this.setState({ valid: true });
                this.props.handleValidityChange(this.props.index, true);
            }
        } else {
            this.setState({ valid: false });
            this.props.handleValidityChange(this.props.index, false);
        }
    }

    render() {
        const websiteValidate = (value) => websiteValidator.test(value);

        const anyInput = (value) => {
            if (value) {
                return true;
            }

            return false;
        };

        return (
            <div>
                <Input
                  name="payDescription"
                  componentClass="input"
                  label="Title"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payDescription}
                  validate={ anyInput }
                />
                <Input
                  name="description"
                  componentClass="textarea"
                  label="Description"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.description}
                  validate={ anyInput }
                />
                <Input
                  name="url"
                  componentClass="input"
                  label="url"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.url}
                  validate={ websiteValidate }
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
                <InputAddress
                  name="reviewer"
                  componentClass="input"
                  label="Reviewer"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.reviewer}
                />
                <InputAddress
                  name="milestoneLeadLink"
                  componentClass="input"
                  label="milestoneLeadLink"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.milestoneLeadLink}
                />
                <InputDuration
                  name="reviewTime"
                  label="Review time"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.reviewTime}
                />
                <InputAddress
                  name="paymentSource"
                  componentClass="input"
                  label="Payment source"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.paymentSource}
                />
                <InputAddress
                  name="payRecipient"
                  componentClass="input"
                  label="Payment recipient"
                  onChange={this.handleInputChange}
                  setValid={this.handleValidityChange}
                  value={this.props.payRecipient}
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
    nameInputChange: React.PropTypes.func,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
    onInputChange: a.onInputChange,
};

const MilestoneEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(MilestoneEditComponent);

export default MilestoneEdit;
