import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onProposeMilestones(
            props.milestoneTrackerAddress, props.milestones, props.action
        );
    };
    return (
        <Button
          bsStyle="primary"
          onClick={ handleProposeMilestones }
          disabled={ props.disabled }
        >
            Propose
        </Button>
    );
}

Component.propTypes = {
    onProposeMilestones: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestones: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    action: PropTypes.array.isRequired,
};
