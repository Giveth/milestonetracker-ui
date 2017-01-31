import React from "react";

import { Grid, Row, Col } from "react-bootstrap";
import Web3Info from "../../Web3Info";

const MyAccount = () =>
    <div>
        <Grid>
            <Row>
                <Col>
                    <Web3Info />
                </Col>
            </Row>
        </Grid>
    </div>;

MyAccount.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};

export default MyAccount;
