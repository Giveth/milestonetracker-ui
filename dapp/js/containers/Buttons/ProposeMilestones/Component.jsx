import React from "react";
import { Button } from "react-bootstrap";

export default function Component(props) {
    const handleProposeMilestones = () => {
        props.onProposeMilestones(
            props.milestoneTrackerAddress, props.milestones
        );
    };
    return (
        <Button
          bsStyle="primary"
          onClick={ handleProposeMilestones }
          disabled={ props.disabled }
        >
            Propose Milestones
        </Button>
    );
}

Component.propTypes = {
    onProposeMilestones: React.PropTypes.func.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    milestones: React.PropTypes.array.isRequired,
    disabled: React.PropTypes.bool,
};
