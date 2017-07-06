import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import InputEther from "./InputEther";
import InputMyAddresses from "../containers/InputMyAddresses";

class ButtonDonate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            from: "",
            inputsValidity: {},
        };
        this.handleDonate = this.handleDonate.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleDonate(event) {
        event.stopPropagation();
        this.props.onDonate(
            this.props.idCampaign, this.state.from, this.state.amount,
        );
        this.setState({ amount: "" });
        this.hideModal();
    }

    showModal() {
        this.setState({ show: true });
    }

    hideModal() {
        this.setState({ show: false });
    }

    handleInputChange(name, value, validity) {
        const validationArray = Object.assign(
          {}, this.state.inputsValidity, { [ name ]: validity });

        this.setState({
            [ name ]: value,
            inputsValidity: validationArray,
            valid: !Object.values(validationArray).includes(false),
        });
    }

    handleSelectChange(name, account) {
        this.setState({ [ name ]: account.address });
    }

    render() {
        return (
            <div>
                <Button
                  bsStyle="success"
                  onClick={this.showModal}
                  bsSize="large"
                  disabled={this.props.disabled}
                >
                    Donate
                </Button>
                <Modal
                  show={this.state.show}
                  onHide={this.hideModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title
                          id="donate-modal-title-lg"
                        >
                            Donating to campaign: {this.props.campaignName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputEther
                          name="amount"
                          label="Donation amount"
                          onChange={this.handleInputChange}
                          value={this.state.amount}
                        />
                        <InputMyAddresses
                          name="from"
                          label="Source address"
                          onChange={this.handleSelectChange}
                          value={this.state.amount}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                          bsStyle="success"
                          onClick={this.handleDonate}
                          className="pull-left"
                          disabled={!this.state.valid}
                        >
                            Donate
                        </Button>
                        <Button onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

ButtonDonate.propTypes = {
    onDonate: PropTypes.func.isRequired,
    idCampaign: PropTypes.number.isRequired,
    campaignName: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default ButtonDonate;
