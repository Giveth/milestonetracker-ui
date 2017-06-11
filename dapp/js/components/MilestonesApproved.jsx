/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";
import PropTypes from "prop-types";

import MilestoneApproved from "./MilestoneApproved";

const beautifyStatus = (status, paymentInfo) => {
    switch (status) {
    case "AcceptedAndInProgress":
        return "In Progress";

    case "AuthorizedForPayment":
        return (paymentInfo && paymentInfo.paid) ? "Paid" : "Authorized For Payment";

    default:
        return status;
    }
};

export default function MilestonesApproved(props) {
    let content = "";

    if (props.milestones) {
        const milestones = [];
        for (let i = 0; i < props.milestones.length; i += 1) {
            milestones.push(
                <MilestoneApproved
                  key={i}
                  title={props.milestones[ i ].payDescription}
                  description={props.milestones[ i ].description}
                  url={props.milestones[ i ].url}
                  maxCompletionDate={props.milestones[ i ].maxCompletionDate}
                  minCompletionDate={props.milestones[ i ].minCompletionDate}
                  milestoneLeadLink={props.milestones[ i ].milestoneLeadLink}
                  payRecipient={props.milestones[ i ].payRecipient}
                  reviewer={props.milestones[ i ].reviewer}
                  reviewTime={props.milestones[ i ].reviewTime}
                  paymentSource={props.milestones[ i ].paymentSource}
                  status={beautifyStatus(
                      props.milestones[ i ].status,
                      props.milestones[ i ].paymentInfo)}
                  doneTime={props.milestones[ i ].doneTime}
                  payDescription={props.milestones[ i ].payDescription}
                  actions={props.milestones[ i ].actions}
                  index={i}
                  milestoneTrackerAddress={props.milestoneTrackerAddress}
                />,
                );
        }
        content = (
            <div>
                <h2>{ props.header }</h2>
                { milestones }

                { props.children }
            </div>);
    }

    return (
        <div>
            {content}
        </div>
    );
}

MilestonesApproved.propTypes = {
    // approved: PropTypes.bool,
    // milestones: PropTypes.array,
    header: PropTypes.string.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
};
