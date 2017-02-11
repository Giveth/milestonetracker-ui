/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 */

import React from "react";

import { Accordion, Panel, ButtonGroup } from "react-bootstrap";
import { ButtonCollectPayment, ButtonMarkMilestoneComplete, RejectCompletedMilestone,
         ApproveCompletedMilestone } from "../containers/Buttons";
import Milestone from "./Milestone";

export default function MilestonesApproved(props) {
    let content = "";

    if (props.milestones) {
        let milestones = [];
        for (let i = 0; i < props.milestones.length; ++ i) {
            let bsStyle = "info";
            if (props.milestones[ i ].status === "Canceled") {
                bsStyle = "danger";
            }
            const header = (
                <span>
                    { props.milestones[ i ].payDescription }
                    <span className="caret"></span>
                </span>);
            const btns = (<span>
                {header}
                <ButtonGroup bsSize="xsmall" className="pull-right">
                    <ApproveCompletedMilestone
                      milestoneID={i}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      reviewerAddress={props.milestones[ i ].reviewer}
                    />
                    <RejectCompletedMilestone
                      milestoneID={i}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      reviewerAddress={props.milestones[ i ].reviewer}
                    />
                    <ButtonMarkMilestoneComplete
                      milestoneID={i}
                      milestoneTrackerAddress={props.milestoneTrackerAddress}
                      fromAddress={props.milestones[ i ].milestoneLeadLink}
                    />
                    <ButtonCollectPayment
                      vaultAddress={ props.vaultAddress }
                    />
                </ButtonGroup>
            </span>);
            milestones.push(
                <Panel
                  bsStyle={ bsStyle }
                  collapsible
                  defaultExpanded
                  key={ i }
                  header={ btns }
                  eventKey={ i }
                >
                    <Milestone
                      title={ props.milestones[ i ].payDescription }
                      description={ props.milestones[ i ].description }
                      url={ props.milestones[ i ].url }
                      maxCompletionDate={ props.milestones[ i ].maxCompletionDate }
                      minCompletionDate={ props.milestones[ i ].minCompletionDate }
                      milestoneLeadLink={ props.milestones[ i ].milestoneLeadLink }
                      payRecipient={ props.milestones[ i ].payRecipient }
                      reviewer={ props.milestones[ i ].reviewer }
                      reviewTime={ props.milestones[ i ].reviewTime }
                      paymentSource={ props.milestones[ i ].paymentSource }
                      status={ props.milestones[ i ].status }
                      doneTime={ props.milestones[ i ].doneTime }
                    />
                </Panel>);
        }
        content = (
            <div>
                <h2>{ props.header }</h2>
                <Accordion>
                    { milestones }
                </Accordion>

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
    approved: React.PropTypes.bool,
    milestones: React.PropTypes.array,
    header: React.PropTypes.string.isRequired,
    vaultAddress: React.PropTypes.string.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};
