import React from "react";

import { Grid, Row, Col } from "react-bootstrap";
import MyAccountContainer from "../../MyAccount";

const MyAccount = () =>
    <div>
        <Grid>
            <Row>
                <Col>
                    <MyAccountContainer />
                </Col>
            </Row>
        </Grid>
    </div>;

MyAccount.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};

export default MyAccount;
