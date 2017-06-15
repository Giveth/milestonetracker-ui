import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import PropTypes from "prop-types";
import { network } from "../../../blockchain";

const About = () => (
    <div>
        <Grid>
            <Row>
                <Col>
                    <h1>About</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <pre>{network.title}</pre>
                </Col>
            </Row>
        </Grid>
    </div>);

About.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
};

export default About;
