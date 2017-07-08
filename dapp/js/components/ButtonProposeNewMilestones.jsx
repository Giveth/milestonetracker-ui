import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import MomentTypes from "react-moment-proptypes";

export default function ButtonProposeNewMilestones(props) {
    const onProposeNewMilestones = () => {
        // Convert the moment format to unix timestamp
        const mlstns = props.milestones.map((milestone) => {
            const mlstn = Object.assign({}, milestone);
            mlstn.minCompletionDate = milestone.minCompletionDate.format("X");
            mlstn.maxCompletionDate = milestone.maxCompletionDate.format("X");
            return mlstn;
        });
        props.proposeNewMilestones(
            props.milestoneTrackerAddress, mlstns, props.action,
        );
    };
    return (
        <Button
          bsStyle="primary"
          onClick={onProposeNewMilestones}
          disabled={props.disabled}
        >
            Propose
        </Button>
    );
}

ButtonProposeNewMilestones.propTypes = {
    proposeNewMilestones: PropTypes.func.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    milestones: PropTypes.arrayOf(PropTypes.shape({
        payDescription: PropTypes.string,
        description: PropTypes.string,
        minCompletionDate: MomentTypes.momentObj.isRequired,
        maxCompletionDate: MomentTypes.momentObj.isRequired,
        payDelay: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        paymentSource: PropTypes.string,
        reviewTime: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        doneTime: PropTypes.number,
        reviewer: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.number,
        milestoneLeadLink: PropTypes.string,
        payRecipient: PropTypes.string,
        payValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
    })).isRequired,
    disabled: PropTypes.bool,
    action: PropTypes.arrayOf(PropTypes.shape({
        account: PropTypes.string.isRequired,
    })).isRequired,
};

ButtonProposeNewMilestones.defaultProps = {
    disabled: true,
};
