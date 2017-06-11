/**
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Panel, ButtonToolbar } from "react-bootstrap";
import MilestoneButtons from "./MilestoneButtons";
import Milestone from "./Milestone";

const preventDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
};

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
                    <span className="dropup"><span className="caret" /></span> :
                    <span className="caret" />
                }
            </span>);

        const btns = (<span>
            {header}
            <ButtonToolbar
              className="pull-right"
              onClick={preventDefault}
            >
                <MilestoneButtons
                  status={this.props.status}
                  milestoneID={this.props.index}
                  actions={this.props.actions}
                  milestoneTrackerAddress={this.props.milestoneTrackerAddress}
                />
            </ButtonToolbar>
        </span>
        );
        return (
            <Panel
              {...additionalStyle}
              header={btns}
              expanded={false}
              onClick={this.handleOnClick}
            >
                {
                    (this.state.visible) ? (
                        <div
                          onClick={preventDefault}
                          role="button"
                          tabIndex={0}
                        >
                            <Milestone
                              title={this.props.payDescription}
                              description={this.props.description}
                              url={this.props.url}
                              maxCompletionDate={this.props.maxCompletionDate}
                              minCompletionDate={this.props.minCompletionDate}
                              milestoneLeadLink={this.props.milestoneLeadLink}
                              payRecipient={this.props.payRecipient}
                              reviewer={this.props.reviewer}
                              reviewTime={this.props.reviewTime}
                              paymentSource={this.props.paymentSource}
                              status={this.props.status}
                              doneTime={this.props.doneTime}
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
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    // maxCompletionDate: PropTypes.any.isRequired,
    // minCompletionDate: PropTypes.any.isRequired,
    milestoneLeadLink: PropTypes.string.isRequired,
    reviewer: PropTypes.string.isRequired,
    reviewTime: PropTypes.number.isRequired,
    paymentSource: PropTypes.string.isRequired,
    // status: PropTypes.string,
    // doneTime: PropTypes.number,
    payRecipient: PropTypes.string.isRequired,
    payDescription: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    milestoneTrackerAddress: PropTypes.string.isRequired,
    // actions: PropTypes.object,
};
