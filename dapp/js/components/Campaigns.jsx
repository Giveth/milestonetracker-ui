import React from "react";

import { ListGroup } from "react-bootstrap";
import { Campaign } from "./";

export default function Campaigns(props) {
    let campaigns = [ ];

    if (props.campaigns) {
        const search = props.filterText.toLowerCase();

        for (let i = 0; i < props.campaigns.length; ++i) {
            // Add only if the name or the description contains the filtered text
            if (props.campaigns[ i ].name.toLowerCase().indexOf(search) !== -1 ||
                props.campaigns[ i ].description.toLowerCase().indexOf(search) !== -1) {
                campaigns.push(
                    <Campaign
                      key={ i.toString() }
                      url={ `/campaigns/${ i }` }
                      name={ props.campaigns[ i ].name }
                      description={ props.campaigns[ i ].description }
                    />
                );
            }
        }
    }

    return (
        <ListGroup>
            { campaigns }
        </ListGroup>
    );
}

Campaigns.propTypes = {
    campaigns: React.PropTypes.array,
    filterText: React.PropTypes.string.isRequired,
};
