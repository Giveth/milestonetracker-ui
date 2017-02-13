import React from "react";
import { Button } from "react-bootstrap";

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 500000000,
            from: "0x22d491bde2303f2f43325b2108d26f1eaba1e32b",
        };
        this.handleDonate = this.handleDonate.bind(this);
    }

    handleDonate(event) {
        event.stopPropagation();
        this.props.onDonate(
            this.props.idCampaign, this.state.from, this.state.value
        );
    }
    render() {
        return (
            <Button
              bsStyle="success"
              onClick={ this.handleDonate }
            >
                Donate
            </Button>
        );
    }
}

Component.propTypes = {
    onDonate: React.PropTypes.func.isRequired,
    idCampaign: React.PropTypes.number.isRequired,
};

export default Component;
