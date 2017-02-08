import React from "react";
import Input from "../components/Input";
import InputAddress from "../components/InputAddress";
import InputDate from "../components/InputDate";
import InputEther from "../components/InputEther";
import InputDuration from "../components/InputDuration";
import { connect } from "react-redux";
import * as a from "../actions";

class MilestoneEditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            inputsValid: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(name, value) {
        this.props.onInputChange(this.props.milestoneTrackerAddress, this.props.index, name, value);
    }

    render() {
        return (
            <div>
                <Input
                  name="payDescription"
                  componentClass="input"
                  label="Title"
                  onChange={this.handleInputChange}
                  value={this.props.payDescription}
                />
                <Input
                  name="description"
                  componentClass="textarea"
                  label="Description"
                  onChange={this.handleInputChange}
                  value={this.props.description}
                />
                <Input
                  name="url"
                  componentClass="input"
                  label="url"
                  onChange={this.handleInputChange}
                  value={this.props.url}
                />
                <InputDate
                  name="minCompletionDate"
                  label="minCompletionDate"
                  onChange={this.handleInputChange}
                  value={this.props.minCompletionDate}
                />
                <InputDate
                  name="maxCompletionDate"
                  label="maxCompletionDate"
                  onChange={this.handleInputChange}
                  value={this.props.maxCompletionDate}
                />
                <InputAddress
                  name="reviewer"
                  componentClass="input"
                  label="Reviewer"
                  onChange={this.handleInputChange}
                  value={this.props.reviewer}
                />
                <InputAddress
                  name="milestoneLeadLink"
                  componentClass="input"
                  label="milestoneLeadLink"
                  onChange={this.handleInputChange}
                  value={this.props.milestoneLeadLink}
                />
                <InputDuration
                  name="reviewTime"
                  label="Review time"
                  onChange={this.handleInputChange}
                  value={this.props.reviewTime}
                />
                <InputAddress
                  name="paymentSource"
                  componentClass="input"
                  label="Payment source"
                  onChange={this.handleInputChange}
                  value={this.props.paymentSource}
                />
                <InputAddress
                  name="payRecipient"
                  componentClass="input"
                  label="Payment recipient"
                  onChange={this.handleInputChange}
                  value={this.props.payRecipient}
                />
                <InputEther
                  name="payValue"
                  label="Payment amount"
                  onChange={this.handleInputChange}
                  value={this.props.payValue}
                />
                <InputDuration
                  name="payDelay"
                  label="Payment delay"
                  onChange={this.handleInputChange}
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
