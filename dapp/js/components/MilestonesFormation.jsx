import React from "react";
import Form from "../components/Form";
import { Accordion, Panel } from "react-bootstrap";
import MilestoneEdit from "../containers/MilestoneEdit";

function MilestonesFormation(props) {
    let content = "There are no newMilestones";

    if (props.newMilestones) {
        let milestones = [];
        for (let i = 0; i < props.newMilestones.length; ++ i) {
            const header = (props.newMilestones[ i ].payDescription) ?
                props.newMilestones[ i ].payDescription : `Milestone #${ i + 1 }`;

            milestones.push(
                <Panel
                  collapsible
                  defaultExpanded
                  key={ i }
                  header={ header }
                  eventKey={ i }
                >
                    <MilestoneEdit
                      description={ props.newMilestones[ i ].description }
                      url={ props.newMilestones[ i ].url }
                      maxCompletionDate={ props.newMilestones[ i ].maxCompletionDate }
                      minCompletionDate={ props.newMilestones[ i ].minCompletionDate }
                      milestoneLeadLink={ props.newMilestones[ i ].milestoneLeadLink }
                      reviewer={ props.newMilestones[ i ].reviewer }
                      reviewTime={ props.newMilestones[ i ].reviewTime }
                      paymentSource={ props.newMilestones[ i ].paymentSource }
                      payDescription={ props.newMilestones[ i ].payDescription }
                      payRecipient={ props.newMilestones[ i ].payRecipient }
                      payValue={ props.newMilestones[ i ].payValue }
                      payDelay={ props.newMilestones[ i ].payDelay }
                      index={ i }
                      milestoneTrackerAddress={ props.milestoneTrackerAddress }
                    />
                </Panel>);
        }
        content = (
            <Accordion>
                { milestones }
            </Accordion>);
    }
    return (
        <Form>
            <h2>{ props.header }</h2>
            {content}
        </Form>
    );
}

MilestonesFormation.propTypes = {
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};

export default MilestonesFormation;
