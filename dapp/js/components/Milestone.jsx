/**
 * Component for
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class Milestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false,
            modal: false,
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
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

    render() {
        return (
            <div>
                <Panel
                  key={this.props.milestone.payData}
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                  style={{ backgroundColor: this.state.hover ? "#CCC" : "white" }}
                >
                    {this.props.milestone.payDescription}
                </Panel>
            </div>
        );
    }
}

Milestone.propTypes = {
    milestone: PropTypes.shape({
        payDescription: PropTypes.string.isRequired,
        payData: PropTypes.string.isRequired,
    }).isRequired,
};

export default Milestone;
