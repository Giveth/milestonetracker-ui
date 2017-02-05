import React from "react";
import Form from "../components/Form";
import { Accordion, Panel, ButtonGroup } from "react-bootstrap";
import MilestoneEdit from "../containers/MilestoneEdit";
import ButtonCloseMilestone from "../containers/Buttons/CloseMilestone";

function MilestonesFormation(props) {
    let content = <p>There are no newMilestones</p>;

    if (props.newMilestones) {
        let milestones = [];
        const mlstns = props.newMilestones.milestones;
        for (let i = 0; i < mlstns.length; ++ i) {
            const header = (mlstns[ i ].payDescription) ?
                mlstns[ i ].payDescription : `Milestone #${ i + 1 }`;
            const btns = (<span>
                {header}
                <ButtonGroup bsSize="xsmall" className="pull-right">
                    <ButtonCloseMilestone
                      milestoneTrackerAddress={ props.milestoneTrackerAddress }
                      index={ i }
                    />
                </ButtonGroup>
            </span>);
            milestones.push(
                <Panel
                  collapsible
                  defaultExpanded
                  key={ i }
                  header={ btns }
                  eventKey={ i }
                >
                    <MilestoneEdit
                      description={ mlstns[ i ].description }
                      url={ mlstns[ i ].url }
                      maxCompletionDate={ mlstns[ i ].maxCompletionDate }
                      minCompletionDate={ mlstns[ i ].minCompletionDate }
                      milestoneLeadLink={ mlstns[ i ].milestoneLeadLink }
                      reviewer={ mlstns[ i ].reviewer }
                      reviewTime={ mlstns[ i ].reviewTime }
                      paymentSource={ mlstns[ i ].paymentSource }
                      payDescription={ mlstns[ i ].payDescription }
                      payRecipient={ mlstns[ i ].payRecipient }
                      payValue={ mlstns[ i ].payValue }
                      payDelay={ mlstns[ i ].payDelay }
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

            { props.children }
        </Form>
    );
}

MilestonesFormation.propTypes = {
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    newMilestones: React.PropTypes.object,
};

export default MilestonesFormation;
