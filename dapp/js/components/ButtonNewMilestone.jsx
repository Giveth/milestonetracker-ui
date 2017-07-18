import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import moment from "moment";
import MilestoneDetailEditable from "../containers/MilestoneDetailEditable";

class ButtonNewMilestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <Button
                  bsStyle="link"
                  onClick={this.showModal}
                >
                    Add new milestone
                </Button>
                <MilestoneDetailEditable
                  show={this.state.show}
                  onHide={this.hideModal}
                  milestoneTrackerAddress={this.props.milestoneTrackerAddress}
                  milestone={{
                      minCompletionDate: moment(),
                      maxCompletionDate: moment().add(3, "months"),
                  }}
                />
            </div>
        );
    }
}

ButtonNewMilestone.propTypes = {
    milestoneTrackerAddress: PropTypes.string.isRequired,
};

export default ButtonNewMilestone;
