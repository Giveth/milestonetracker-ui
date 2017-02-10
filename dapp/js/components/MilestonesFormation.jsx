import React from "react";
import Form from "../components/Form";
import { Accordion, Panel, ButtonGroup } from "react-bootstrap";
import MilestoneEdit from "../containers/MilestoneEdit";
import ButtonCloseMilestone from "../containers/Buttons/CloseMilestone";
import { ButtonProposeMilestones, ButtonAddMilestone } from "../containers/Buttons";

class MilestonesFormation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            inputsValidity: {},
        };
        this.handleValidityChange = this.handleValidityChange.bind(this);
    }

    handleValidityChange(name, val) {
        const validationArray = Object.assign({}, this.state.inputsValidity);
        validationArray[ name ] = val;
        this.setState({ inputsValidity: validationArray });

        if (val) {
            for (const key in validationArray) {
                if (!validationArray[ key ]) {
                    this.setState({ valid: false });
                    break;
                }
                this.setState({ valid: true });
            }
        } else {
            this.setState({ valid: false });
        }
    }
    render() {
        let content = <p>There are no newMilestones</p>;
        const newMilestonesButtons = [];

        if (this.props.newMilestones && this.props.newMilestones.milestones) {
            newMilestonesButtons.push(<ButtonProposeMilestones
              key="proposeMilestones"
              milestoneTrackerAddress={ this.props.milestoneTrackerAddress }
              milestones={ this.props.newMilestones.milestones }
              disabled={ !this.state.valid }
            />);
        }

        if (this.props.newMilestones) {
            let milestones = [];
            const mlstns = this.props.newMilestones.milestones;
            for (let i = 0; i < mlstns.length; ++ i) {
                const text = (mlstns[ i ].payDescription) ?
                    mlstns[ i ].payDescription : `Milestone #${ i + 1 }`;
                const header = <span>{ text } <span className="caret"></span></span>;
                const btns = (<span>
                    {header}
                    <ButtonGroup bsSize="xsmall" className="pull-right">
                        <ButtonCloseMilestone
                          milestoneTrackerAddress={ this.props.milestoneTrackerAddress }
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
                      bsStyle={this.state.inputsValidity[ i ] ? "success" : "danger" }
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
                          milestoneTrackerAddress={ this.props.milestoneTrackerAddress }
                          handleValidityChange={ this.handleValidityChange }
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
                <h2>{ this.props.header }</h2>
                {content}

                <ButtonAddMilestone
                  key="addMilestone"
                  milestoneTrackerAddress={ this.props.milestoneTrackerAddress }
                />
                {newMilestonesButtons}
            </Form>
        );
    }
}

MilestonesFormation.propTypes = {
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    newMilestones: React.PropTypes.object,
};

export default MilestonesFormation;
