/**
 *
 */
import React from "react";

import { Grid, Row, Col, ProgressBar } from "react-bootstrap";
import { SearchBar, Campaigns } from "../../../components";

export default class CampaignsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(text) {
        this.setState({
            filterText: text,
        });
    }
    render() {
        let content = (
            <div>
                <h2>Loading data from blockchain... This may take a minute or two.</h2>
                <ProgressBar active now={100} />
            </div>
        );
        if (this.props.givethDirectoryState.campaigns) {
            content = (
                <div>
                    <p>Are you ready to make a change?</p>
                    <SearchBar
                      filterText={ this.state.filterText }
                      onUserInput={ this.handleUserInput }
                      placeholder="Search in campaigns"
                    />
                    <Campaigns
                      campaigns={ this.props.givethDirectoryState.campaigns }
                      filterText={ this.state.filterText}
                    />
                </div>);
        }
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            { content }
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

CampaignsPage.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};
