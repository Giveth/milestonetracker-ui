import React from "react";

export default function GivethDirectoryComponent(props) {
    return (
        <div className="GivethDirectory">
            <h2>GivethDirectory</h2>
            <pre> {JSON.stringify(props.givethDirectoryState, null, 2)} </pre>
        </div>
    );
}

GivethDirectoryComponent.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};
