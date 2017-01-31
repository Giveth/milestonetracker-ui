import React from "react";

import { Grid, Row, Col } from "react-bootstrap";

const About = () =>
    <div>
        <Grid>
            <Row>
                <Col>
                    <h1>About</h1>
                </Col>
            </Row>
        </Grid>
    </div>;

About.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};

export default About;
