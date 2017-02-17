import React from "react";
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
    onProposeMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestones: React.PropTypes.array.isRequired,
    disabled: React.PropTypes.bool,
    action: React.PropTypes.array.isRequired,
};
