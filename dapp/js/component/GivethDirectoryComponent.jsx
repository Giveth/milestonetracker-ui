import React from "react";

import { FormGroup,
        FormControl,
        InputGroup,
        Button,
        Grid,
        Row,
        Col,
        ListGroup,
        ListGroupItem,
        } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function GivethDirectoryComponent(props) {
    let campaigns = [ ];

    if (props.givethDirectoryState.campaigns) {
        const cmpgns = props.givethDirectoryState.campaigns;
        for (let i = 0; i < cmpgns.length; ++i) {
            campaigns.push(<LinkContainer
              key={ i.toString() }
              to={ { pathname: `/campaigns/${ i }` } }
            >
                <ListGroupItem
                  header={ cmpgns[ i ].name }
                >
                { cmpgns[ i ].description }
                </ListGroupItem>
            </LinkContainer>
            );
        }
    }

    let search = (<FormGroup>
        <InputGroup>
            <FormControl type="text" placeholder="Keywords..." />
            <InputGroup.Button>
                <Button>Search</Button>
            </InputGroup.Button>
        </InputGroup>
    </FormGroup>);

    return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        { search }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            { campaigns }
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

GivethDirectoryComponent.propTypes = {
    givethDirectoryState: React.PropTypes.object.isRequired,
};
