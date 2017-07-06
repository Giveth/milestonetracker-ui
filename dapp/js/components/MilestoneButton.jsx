import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const MilestoneButton = (props) => {
    const onClick = (event) => {
        event.stopPropagation();
        props.clickAction(
            props.milestoneTrackerAddress, props.milestoneID, props.action,
        );
    };
    return (
        <Button
          className="pull-left"
          onClick={onClick}
        >
            {props.title}
        </Button>
    );
};

MilestoneButton.propTypes = {
    action: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
    })).isRequired,
    clickAction: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestoneID: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default MilestoneButton;
