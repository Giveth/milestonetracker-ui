import React from "react";
import Input from "../components/Input";
import InputAddress from "../components/InputAddress";
import InputDate from "../components/InputDate";
import InputEther from "../components/InputEther";
import InputDuration from "../components/InputDuration";
import { connect } from "react-redux";
import * as a from "../actions";

function MilestoneEditComponent(props) {
    const inputChange = (name, value) => {
        props.onInputChange(props.milestoneTrackerAddress, props.index, name, value);
    };

    return (
        <div>
            <Input
              name="payDescription"
              componentClass="input"
              label="Title"
              onChange={inputChange}
              value={props.payDescription}
            />
            <Input
              name="description"
              componentClass="textarea"
              label="Description"
              onChange={inputChange}
              value={props.description}
            />
            <Input
              name="url"
              componentClass="input"
              label="url"
              onChange={inputChange}
              value={props.url}
            />
            <InputDate
              name="minCompletionDate"
              label="minCompletionDate"
              onChange={inputChange}
              value={props.minCompletionDate}
            />
            <InputDate
              name="maxCompletionDate"
              label="maxCompletionDate"
              onChange={inputChange}
              value={props.maxCompletionDate}
            />
            <InputAddress
              name="reviewer"
              componentClass="input"
              label="Reviewer"
              onChange={inputChange}
              value={props.reviewer}
            />
            <InputAddress
              name="milestoneLeadLink"
              componentClass="input"
              label="milestoneLeadLink"
              onChange={inputChange}
              value={props.milestoneLeadLink}
            />
            <InputDuration
              name="reviewTime"
              label="Review time"
              onChange={inputChange}
              value={props.reviewTime}
            />
            <InputAddress
              name="paymentSource"
              componentClass="input"
              label="Payment source"
              onChange={inputChange}
              value={props.paymentSource}
            />
            <InputAddress
              name="payRecipient"
              componentClass="input"
              label="Payment recipient"
              onChange={inputChange}
              value={props.payRecipient}
            />
            <InputEther
              name="payValue"
              label="Payment amount"
              onChange={inputChange}
              value={props.payValue}
            />
            <InputDuration
              name="payDelay"
              label="Payment delay"
              onChange={inputChange}
              value={props.payDelay}
            />
        </div>
    );
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
