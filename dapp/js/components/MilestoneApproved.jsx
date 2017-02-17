/**
 *
 */

import React from "react";
import { Panel, ButtonToolbar } from "react-bootstrap";
import MilestoneButtons from "./MilestoneButtons";
import Milestone from "./Milestone";

export default class MilestoneApproved extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    /**
     * OnClick on the header
     */
    handleOnClick() {
        this.setState({ visible: !this.state.visible });
    }

    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        const additionalStyle = {};
        switch (this.props.status) {
        case "Canceled":
            additionalStyle.bsStyle = "danger";
            break;

        case "Paid":
            additionalStyle.bsStyle = "success";
            break;

        case "In Progress":
            additionalStyle.bsStyle = "info";
            break;

        default:
            break;
        }
        const header = (
            <span>
                { `${ this.props.payDescription } ` }
                { this.state.visible ?
                    <span className="dropup"><span className="caret"></span></span> :
                    <span className="caret"></span>
                }
            </span>);

        const btns = (<span>
            {header}
            <ButtonToolbar
              className="pull-right"
              onClick={ this.preventDefault }
            >
                <MilestoneButtons
                  status={ this.props.status }
                  milestoneID={ this.props.index }
                  actions={ this.props.actions }
                  milestoneTrackerAddress={ this.props.milestoneTrackerAddress }
                />
            </ButtonToolbar>
        </span>
        );
        return (
            <Panel
              {...additionalStyle}
              header={ btns }
              expanded={ false }
              onClick={ this.handleOnClick }
            >
                {
                    (this.state.visible) ? (
                        <div
                          onClick={ this.preventDefault }
                        >
                            <Milestone
                              title={ this.props.payDescription }
                              description={ this.props.description }
                              url={ this.props.url }
                              maxCompletionDate={ this.props.maxCompletionDate }
                              minCompletionDate={ this.props.minCompletionDate }
                              milestoneLeadLink={ this.props.milestoneLeadLink }
                              payRecipient={ this.props.payRecipient }
                              reviewer={ this.props.reviewer }
                              reviewTime={ this.props.reviewTime }
                              paymentSource={ this.props.paymentSource }
                              status={ this.props.status }
                              doneTime={ this.props.doneTime }
                            />
                        </div>
                    )
                    :
                    null
                }
            </Panel>
        );
    }
}

MilestoneApproved.propTypes = {
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    maxCompletionDate: React.PropTypes.any.isRequired,
    minCompletionDate: React.PropTypes.any.isRequired,
    milestoneLeadLink: React.PropTypes.string.isRequired,
    reviewer: React.PropTypes.string.isRequired,
    reviewTime: React.PropTypes.number.isRequired,
    paymentSource: React.PropTypes.string.isRequired,
    status: React.PropTypes.string,
    doneTime: React.PropTypes.number,
    payRecipient: React.PropTypes.string.isRequired,
    payDescription: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
    actions: React.PropTypes.object,
};
