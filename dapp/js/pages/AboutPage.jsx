import React from "react";

import { Grid, Row, Col } from "react-bootstrap";

export default class AboutPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <h1>About</h1>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
