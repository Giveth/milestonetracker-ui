/**
 * Component for a campaign to be shown in a list of campaigns
 *
 * Expects following properties:
 * @prop{string} url          Local URL of the app to the campaign
 * @prop{string} name         Name of the campaign
 * @prop{string} description  Description of the campaign
 */

import React from "react";

import { ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Campaign(props) {
    return (
        <LinkContainer to={ { pathname: `${ props.url }` } }>
            <ListGroupItem header={ props.name }>
            { props.description }
            </ListGroupItem>
        </LinkContainer>
    );
}

Campaign.propTypes = {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
};
