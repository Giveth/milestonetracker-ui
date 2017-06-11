import React from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-bootstrap";

const Component = ({ fullState }) =>
    <Grid>
        <Row>
            <h1>Home</h1>
            <pre>{ JSON.stringify(fullState, 0, 2) }</pre>
        </Row>
    </Grid>;

Component.propTypes = {
    fullState: PropTypes.object.isRequired,
};

export default Component;
