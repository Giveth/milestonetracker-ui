/**
 * Main App component which includes navigation and the app content
 */
import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const loading = (
    <div>
        <h2>Loading data from blockchain...</h2>
        <ProgressBar active now={100} />
        <p>This may take up to a few minutes depending on the ethereum network load.</p>
    </div>
);

const BlockChainContent = props => (
    <div className="app">
        { props.loaded ? props.children : loading }
    </div>
);

BlockChainContent.propTypes = {
    loaded: PropTypes.bool.isRequired,
};

export default BlockChainContent;
