import React from "react";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
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
            <Input
              name="reviewer"
              componentClass="input"
              label="reviewer"
              onChange={inputChange}
              value={props.reviewer}
            />
            <Input
              name="milestoneLeadLink"
              componentClass="input"
              label="milestoneLeadLink"
              onChange={inputChange}
              value={props.milestoneLeadLink}
            />
            <Input
              name="reviewTime"
              componentClass="input"
              label="reviewTime"
              onChange={inputChange}
              value={props.reviewTime}
            />
            <Input
              name="paymentSource"
              componentClass="input"
              label="paymentSource"
              onChange={inputChange}
              value={props.paymentSource}
            />
            <Input
              name="payRecipient"
              componentClass="input"
              label="payRecipient"
              onChange={inputChange}
              value={props.payRecipient}
            />
            <Input
              name="payValue"
              componentClass="input"
              label="payValue"
              onChange={inputChange}
              value={props.payValue}
            />
            <Input
              name="payDelay"
              componentClass="input"
              label="payDelay"
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
