import React from "react";
import { Grid, Row } from "react-bootstrap";

const Component = ({ fullState }) =>
    <Grid>
        <Row>
            <h1>Home</h1>
            <pre>{ JSON.stringify(fullState, 0, 2) }</pre>
        </Row>
    </Grid>;

Component.propTypes = {
    fullState: React.PropTypes.object.isRequired,
};

export default Component;
