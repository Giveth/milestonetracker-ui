/**
 * Main App component which includes navigation and the app content
 */
import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

const loading = (
    <div className="chain-progress-bar">
        <h3 className="title">Loading new data from blockchain...</h3>
        <ProgressBar active now={100} />
        <p className="small">This may take up to a few minutes depending on the ethereum network load.</p>
    </div>
);

const BlockChainContent = props => (
    <div className="app" >
        { props.loaded ? null : loading }
        { props.children }
    </div>
);

BlockChainContent.propTypes = {
    loaded: PropTypes.bool.isRequired,
};

export default BlockChainContent;
