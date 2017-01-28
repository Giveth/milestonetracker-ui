import React from "react";
import { ProgressBar, Grid, Row, Col, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Component(props) {
    let content = (
        <div>
            <h2>Loading campaign...</h2>
            <ProgressBar active now={100} />
        </div>
    );
    const id = props.params.campaignId;
    if (props.givethDirectoryState.campaigns &&
        props.givethDirectoryState.campaigns.length >= id - 1) {
        const currentCampaign = props.givethDirectoryState.campaigns[ id ];

        const milestones = (
            <LinkContainer
              to={ { pathname: `/campaigns/${ props.params.campaignId }/milestones` } }
            >
                <NavItem>Milestones</NavItem>
            </LinkContainer>
        );

        content = (
            <div>
                <h2>
                    <a
                      href={ currentCampaign.url }
                      target="_blank"
                    >
                      { currentCampaign.name }
                    </a>
                </h2>
                <Nav bsStyle="pills">
                    <LinkContainer
                      to={ { pathname: `/campaigns/${ props.params.campaignId }/details` } }
                    >
                        <NavItem>Details</NavItem>
                    </LinkContainer>
                    { milestones }
                    <LinkContainer
                      to={ { pathname: `/campaigns/${ props.params.campaignId }/vault` } }
                    >
                        <NavItem>Vault</NavItem>
                    </LinkContainer>
                </Nav>

                { props.children }

                <pre> {JSON.stringify(currentCampaign, null, 2)}</pre>
            </div>
        );
    }

    return (
        <Grid>
            <Row>
                <Col>{ content }</Col>
            </Row>
        </Grid>
    );
}

Component.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
};
