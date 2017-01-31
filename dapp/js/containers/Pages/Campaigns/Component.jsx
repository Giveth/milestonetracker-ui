/**
 *
 */
import React from "react";

import { Grid, Row, Col } from "react-bootstrap";
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
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <SearchBar
                              filterText={ this.state.filterText }
                              onUserInput={ this.handleUserInput }
                              placeholder="Search in campaigns"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Campaigns
                              campaigns={ this.props.givethDirectoryState.campaigns }
                              filterText={ this.state.filterText}
                            />
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
