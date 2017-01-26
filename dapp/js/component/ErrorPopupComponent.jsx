import React from "react";

function ErrorPopupComponent(props) {
    if (!props.visible) return null;
    return (
        <div className="ErrorPpopup">
            <h2>ErrorPpopup</h2>
        </div>
    );
}

ErrorPopupComponent.propTypes = {
    visible: React.PropTypes.bool.isRequired,
};

export default ErrorPopupComponent;
