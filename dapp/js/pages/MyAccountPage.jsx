import React from "react";

import { Grid, Row, Col } from "react-bootstrap";

import { Web3Info, Web3ErrorPopup } from "../containers/Web3ErrorPopup";
import Web3TransactionPopoup from "../components/Web3TransactionPopoup";
import Web3LastTransactions from "../components/Web3LastTransactions";

export default function MyAccountPage() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        <h1>My Account</h1>
                        <Web3ErrorPopup />
                        <Web3TransactionPopoup />
                        <Web3LastTransactions />
                        <Web3Info />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

MyAccountPage.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};
