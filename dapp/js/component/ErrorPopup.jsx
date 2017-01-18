import React from "react";

export default function ErrorPpopup(props) {
    if (!props.visible) return null;
    return (
        <div className="ErrorPpopup">
            <h2>ErrorPpopup</h2>
        </div>
    );
}

ErrorPpopup.propTypes = {
    visible: React.PropTypes.bool.isRequired,
};
