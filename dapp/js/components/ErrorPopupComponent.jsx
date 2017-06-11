import React from "react";
import PropTypes from "prop-types";

function ErrorPopupComponent(props) {
    if (!props.visible) return null;
    return (
        <div className="ErrorPpopup">
            <h2>ErrorPpopup</h2>
        </div>
    );
}

ErrorPopupComponent.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default ErrorPopupComponent;
