import React from "react";
import { Button } from "react-bootstrap";
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
                  bsStyle="success"
                  onClick={this.showModal}
                >
                    Add new milestone
                </Button>
                <MilestoneDetailEditable
                  show={this.state.show}
                  onHide={this.hideModal}
                />
            </div>
        );
    }
}

ButtonNewMilestone.propTypes = {
};

export default ButtonNewMilestone;
