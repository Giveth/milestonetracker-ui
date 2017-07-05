/**
 * Component for
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
// import moment from "moment";
import * as validator from "../validators";

import Input from "./Input";
import InputDate from "./InputDate";
import InputDuration from "./InputDuration";
import InputEther from "./InputEther";

class MilestoneDetailEditable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            payDescription: {
                value: props.milestone.payDescription,
            },
            description: {
                value: props.milestone.description,
            },
            url: {
                value: props.milestone.url,
            },
            minCompletionDate: {
                value: props.milestone.minCompletionDate,
            },
            maxCompletionDate: {
                value: props.milestone.maxCompletionDate,
            },
            reviewer: {
                value: props.milestone.reviewer,
            },
            milestoneLeadLink: {
                value: props.milestone.milestoneLeadLink,
            },
            reviewTime: {
                value: props.milestone.reviewTime,
            },
            paymentSource: {
                value: props.milestone.paymentSource,
            },
            payRecipient: {
                value: props.milestone.payRecipient,
            },
            payValue: {
                value: props.milestone.payValue,
            },
            payDelay: {
                value: props.milestone.payDelay,
            },
            payData: props.milestone.payData,
            id: props.milestone.id,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onInputChange(name, value, valid) {
        const test = Object.assign({}, this.state);
        test[ name ] = { value, valid };

        const isValid = Object.values(test)
            .filter(record => record !== undefined)
            .reduce((sum, record) => {
                if (Object.prototype.hasOwnProperty.call(record, "valid")) {
                    return sum && record.valid;
                }
                return sum;
            });

        this.setState({
            [ name ]: {
                value,
                valid,
            },
            valid: isValid,
        });
    }

    onSave() {
        this.props.save(this.state);
        if (this.props.milestone.id === undefined) {
            this.setState({
                payDescription: {
                    value: undefined,
                    valid: false,
                },
                description: {
                    value: undefined,
                    valid: false,
                },
                url: {
                    value: undefined,
                    valid: false,
                },
                minCompletionDate: {
                    value: undefined,
                    valid: false,
                },
                maxCompletionDate: {
                    value: undefined,
                    valid: false,
                },
                reviewer: {
                    value: undefined,
                    valid: false,
                },
                milestoneLeadLink: {
                    value: undefined,
                    valid: false,
                },
                reviewTime: {
                    value: undefined,
                    valid: false,
                },
                paymentSource: {
                    value: undefined,
                    valid: false,
                },
                payRecipient: {
                    value: undefined,
                    valid: false,
                },
                payValue: {
                    value: undefined,
                    valid: false,
                },
                payDelay: {
                    value: undefined,
                    valid: false,
                },
                payData: undefined,
                valid: false,
            });
        }
    }

    onRemove() {
        if (this.props.milestone.id !== undefined) {
            this.props.remove(this.props.milestone.id);
            this.props.onHide();
        }
    }

    render() {
        return (
            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              onExiting={this.onSave}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Input
                          name="payDescription"
                          placeholder="Title"
                          componentClass="input"
                          onChange={this.onInputChange}
                          value={this.state.payDescription.value}
                          validate={validator.any}
                        />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                      name="description"
                      placeholder="Description"
                      componentClass="textarea"
                      onChange={this.onInputChange}
                      value={this.state.description.value}
                      validate={validator.any}
                    />
                    <Input
                      name="url"
                      componentClass="input"
                      label="URL"
                      onChange={this.onInputChange}
                      value={this.state.url.value}
                      validate={validator.website}
                    />
                    <InputDate
                      name="minCompletionDate"
                      label="Min Completion Date"
                      onChange={this.onInputChange}
                      value={this.state.minCompletionDate.value}
                    />
                    <InputDate
                      name="maxCompletionDate"
                      label="Max Completion Date"
                      onChange={this.onInputChange}
                      value={this.state.maxCompletionDate.value}
                    />
                    <Input
                      name="reviewer"
                      componentClass="input"
                      label="Reviewer Address"
                      onChange={this.onInputChange}
                      value={this.state.reviewer.value}
                      validate={validator.ethereumAddress}
                    />
                    <Input
                      name="milestoneLeadLink"
                      componentClass="input"
                      label="Milestone Lead Link Address"
                      onChange={this.onInputChange}
                      value={this.state.milestoneLeadLink.value}
                      validate={validator.ethereumAddress}
                    />
                    <InputDuration
                      name="reviewTime"
                      label="Review time"
                      onChange={this.onInputChange}
                      value={this.state.reviewTime.value}
                    />
                    <Input
                      name="paymentSource"
                      componentClass="input"
                      label="Payment source"
                      onChange={this.onInputChange}
                      value={this.state.paymentSource.value}
                      validate={validator.ethereumAddress}
                    />
                    <Input
                      name="payRecipient"
                      componentClass="input"
                      label="Payment Recipient Address"
                      onChange={this.onInputChange}
                      value={this.state.payRecipient.value}
                      validate={validator.ethereumAddress}
                    />
                    <InputEther
                      name="payValue"
                      label="Payment amount"
                      onChange={this.onInputChange}
                      value={this.state.payValue.value}
                    />
                    <InputDuration
                      name="payDelay"
                      label="Payment delay"
                      onChange={this.onInputChange}
                      value={this.state.payDelay.value}
                    />
                </Modal.Body>
                <Modal.Footer>
                    {this.props.milestone.id !== undefined ? (
                        <Button
                          bsStyle="danger"
                          onClick={this.onRemove}
                          className="pull-left"
                        >
                            Remove
                        </Button>
                        )
                        : ""
                    }
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

MilestoneDetailEditable.propTypes = {
    milestone: PropTypes.shape({
        payDescription: PropTypes.string,
        description: PropTypes.string,
        minCompletionDate: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        maxCompletionDate: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        payDelay: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        paymentSource: PropTypes.string,
        reviewTime: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        doneTime: PropTypes.number,
        reviewer: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.number,
        milestoneLeadLink: PropTypes.string,
        payRecipient: PropTypes.string,
        payValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        payData: PropTypes.string,
    }),
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

MilestoneDetailEditable.defaultProps = {
    milestone: {},
};

export default MilestoneDetailEditable;
