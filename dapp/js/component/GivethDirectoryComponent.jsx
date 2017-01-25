import React from "react";

import App from "./App";

export default function GivethDirectoryComponent(props) {
    // let campaigns = [ ];
    //
    // if (props.givethDirectoryState.campaigns) {
    //     const cmpgns = props.givethDirectoryState.campaigns;
    //     for (let i = 0; i < cmpgns.length; ++i) {
    //         campaigns.push(<ListItem
    //           caption={ cmpgns[ i ].name }
    //           legend={ cmpgns[ i ].description }
    //         />
    //         );
    //     }
    // }

    return (
        <App>
            <h2>GivethDirectory</h2>
            <pre> {JSON.stringify(props.givethDirectoryState, null, 2)} </pre>
        </App>
    );
}

GivethDirectoryComponent.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};
