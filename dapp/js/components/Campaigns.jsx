/**
 * List of campaigns with a search option
 *
 * Expects following properties:
 * @prop{string} campaigns   Array of campaigns
 * @prop{string} filterText  Text to search in campaigns name and description.
 *                           Only the one matching should be displayed
 */
import React from "react";
import PropTypes from "prop-types";

import { ListGroup } from "react-bootstrap";
import { Campaign } from "./";

export default function Campaigns(props) {
    const campaigns = [ ];

    if (props.campaigns) {
        const search = props.filterText.toLowerCase();

        for (let i = 0; i < props.campaigns.length; i += 1) {
            // Add only if the name or the description contains the filtered text
            if (props.campaigns[ i ].name.toLowerCase().indexOf(search) !== -1 ||
                props.campaigns[ i ].description.toLowerCase().indexOf(search) !== -1) {
                campaigns.push(
                    <Campaign
                      key={i.toString()}
                      url={`/campaigns/${ i }/details`}
                      name={props.campaigns[ i ].name}
                      description={props.campaigns[ i ].description}
                    />,
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
//    campaigns: PropTypes.array,
    filterText: PropTypes.string.isRequired,
};
