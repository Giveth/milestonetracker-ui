/**
 * Main App component which includes navigation and the app content
 */
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Navigation from "../containers/Navigation";
import NoAccountWarning from "./NoAccountWarning";

const App = props => (
    <div className="app">
        <Navigation />

        <Grid>
            <Row>
                <Col>
                    { props.children }
                </Col>
            </Row>
        </Grid>
        <NoAccountWarning />
    </div>
);

export default App;
