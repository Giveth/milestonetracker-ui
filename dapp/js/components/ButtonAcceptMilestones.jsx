import React from "react";
import PropTypes from "prop-types";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ButtonAcceptMilestones(props) {
    const tooltip = (props.disabled) ? (
        <Tooltip id="tooltip">Blockchain syncing.</Tooltip>
    ) : null;

    const handleProposeMilestones = () => {
        if (props.disabled) {
            return;
        }

        props.onAcceptMilestones(
            props.milestoneTrackerAddress,
            props.proposalHash,
            props.action,
        );
    };

    const xs = props.disabled ? { pointerEvents: "none" } : {};
    const btn = (<Button bsStyle="success" style={xs} disabled={props.disabled} onClick={handleProposeMilestones}>Accept</Button>);

    if (props.disabled) {
        return (
            <OverlayTrigger placement="top" overlay={tooltip} >
                <div style={{ display: "inline-block", cursor: "not-allowed" }} >
                    {btn}
                </div>
            </OverlayTrigger>
        );
    }

    return (btn);
}

ButtonAcceptMilestones.propTypes = {
    onAcceptMilestones: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    proposalHash: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    action: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
    })).isRequired,
};
