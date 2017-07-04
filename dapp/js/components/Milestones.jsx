/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";

import { Milestone } from "./";

const Milestones = props => (
    <div>
        <h4>{props.title}</h4>
        <Well style={{ padding: "5pt" }}>
            {props.milestones.map(milestone => (
                <Milestone
                  key={milestone.payData}
                  milestone={milestone}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                  editable={props.editable}
                />
            ))}
            {props.buttons}
        </Well>
    </div>
);

Milestones.propTypes = {
    title: PropTypes.string.isRequired,
    milestones: PropTypes.arrayOf(PropTypes.shape({
        payDescription: PropTypes.string.isRequired,
    })).isRequired,
    buttons: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    editable: PropTypes.bool,
};

Milestones.defaultProps = {
    milestones: [],
    buttons: "",
    editable: false,
};

export default Milestones;
