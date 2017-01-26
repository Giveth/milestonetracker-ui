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
