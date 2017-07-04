/**
 * Component for
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";
import { MilestoneDetail, MilestoneDetailEditable } from "./";

class Milestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            modal: false,
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onModalHide = this.onModalHide.bind(this);
    }

    onMouseEnter() {
        this.setState({ hover: true });
    }

    onMouseLeave() {
        this.setState({ hover: false });
    }

    onClick() {
        this.setState({ modal: true });
    }

    onModalHide() {
        this.setState({ modal: false });
    }

    render() {
        return (
            <div>
                <Panel
                  key={this.props.milestone.payData}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  onClick={this.onClick}
                  style={{ backgroundColor: this.state.hover ? "#CCC" : "white" }}
                >
                    {this.props.milestone.payDescription}
                </Panel>
                {this.props.editable ?
                    <MilestoneDetailEditable
                      milestone={this.props.milestone}
                      onHide={this.onModalHide}
                      show={this.state.modal}
                      milestoneTrackerAddress={this.props.milestoneTrackerAddress}
                    />
                :
                    <MilestoneDetail
                      milestone={this.props.milestone}
                      onHide={this.onModalHide}
                      show={this.state.modal}
                      milestoneTrackerAddress={this.props.milestoneTrackerAddress}
                    />
                }
            </div>
        );
    }
}

Milestone.propTypes = {
    milestone: PropTypes.shape({
        payDescription: PropTypes.string.isRequired,
        payData: PropTypes.string.isRequired,
    }).isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
};

export default Milestone;
