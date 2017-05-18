/* eslint-disable */
import React, { Component } from "react";
import fileDownload from 'react-file-download';
import DeploymentResults from '../../../components/DeploymentResults';
import Field from '../../../components/Field';
import { deploymentActions } from '../../../constants';
import { Form, FormGroup, ControlLabel, FormControl, Col, Row, Button, ProgressBar, Alert } from 'react-bootstrap';
import w3 from 'web3';

const provider_endpoint = process.argv[2] ? process.argv[2].substr(2) : "http://localhost:8545";
let web3;
if (typeof window.web3 !== "undefined") {
    web3 = new w3(window.web3.currentProvider);
} else {
    web3 = new w3(new w3.providers.HttpProvider(provider_endpoint));
}

export default class Deployer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edited: false,
      domain: null,
      cancelOpen: false
    }
  }

  componentDidMount() {
    this.props.setAccount(web3.eth.accounts[0]);
    let currentNetwork;
    let _campaignTrackerAddress
    let domain;
    const networks = {
        1: 'Main',
        2: 'Morden',
        3: 'Ropsten',
        4: 'Testrpc'
    };
    const campaignTrackerContractLocations = {
        'Main': '0x26104cd17cc77e510ef20adf11ecb682ca7760f0',
        'Morden': '0x0',
        'Ropsten': '0x53fc022DD190F0b37A5501FeE92171Ed1C7CD4Eb',
        'Testrpc': '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab' //enter your own for testing
    };

    web3.version.getNetwork((e, result) => {
        currentNetwork = result < 4 ? networks[result] : networks[4];
        _campaignTrackerAddress = campaignTrackerContractLocations[currentNetwork];
        console.log(`Connected to the ${currentNetwork} network.  Campaign Tracker is at ${_campaignTrackerAddress}`);
        domain = currentNetwork == 'Main' ? 'https://etherscan.io/tx/' : currentNetwork == 'Ropsten' ? 'https://ropsten.etherscan.io/tx/' : '';
        this.setState({ domain });
    });
  }

  //update values to the campaign fields.
  handleChange(item, caller) {
    this.setState({ edited: true });
    let campaignValues = Object.assign({}, this.props.campaignValues);
    campaignValues[item] = caller.currentTarget.value;
    this.props.updateCampaignValues(campaignValues);
  }

  //FIXME: CHECK INPUT
  //update the user's account (source of funds)
  updateUser(caller) {
    this.props.setAccount(caller.currentTarget.value);
  }

  //begin the deployment chain.
  runDeployment() {
    this.props.runDeployment(this.props.userAccount, this.props.campaignValues);
  }

  cancel() {
    this.setState({ cancelOpen: false });
    this.props.cancel();
  }

  //get deployment chain progress for progress bar.
  getPercentComplete() {
    let complete = 10;
    for(var deployment in this.props.completedDeployments) {
      if(this.props.completedDeployments[deployment] == true) complete += (90/6); //(90/8);
    }
    return complete;
  }

  //format the text for human-readable progress output.
  formatCurrentDeploymentStep(step) {
    if(step) {
      let words = step.replace( /([A-Z])/g, " $1" );
      let stepText =  words.charAt(0).toUpperCase() + words.slice(1);
      return stepText;
    }
    return "";
  }

  downloadFile() {
    fileDownload(JSON.stringify(this.props.deploymentResults), 'deployment_results.txt');
  }

  //reset all app values to their initial states.
  reset() {
    this.setState({ edited: false });
    this.props.reset();
  }

  render() {
    const { campaignValues, userAccount, deploymentStatus, deploymentResults, currentDeploymentStep, error } = this.props;
    return(
      <div className="main container padded-vertical">
        <div className="masthead">
          <div className="logo-giveth"></div>
          <h1 className="text-center">Campaign Deployer</h1>
        </div>
        <div>
          <Row>
            <Col md={ 8 } mdOffset={ 2 }>
              {
                error &&
                <Alert bsStyle="danger">
                  <h2>Oops! There was an error!</h2>
                  <h4>{ error.message }</h4>
                  <p>{ error.stacktrace }</p>
                </Alert>
              }
              <div className="deployment-progress text-center">
                {
                  deploymentStatus === deploymentActions.RUN_IN_PROGRESS &&
                  <div>
                    <h4>Deploying: { this.formatCurrentDeploymentStep(currentDeploymentStep) } <img src="../../img/spinner.gif" className="spinner" /></h4>
                    <ProgressBar active now={ this.getPercentComplete() } />
                    <div>
                      <Button bsStyle="danger" onClick={ () => this.setState({ cancelOpen: true }) } disabled={ this.state.cancelOpen }>Cancel Deployment</Button>
                      {
                        this.state.cancelOpen &&
                        <Alert bsStyle="danger" className="cancel-confirmation">
                          <h3>Warning</h3>
                          <p>
                            Cancelling a running deployment will result in a loss of all progress.  Do you wish to continue?
                            <div className="pullRight button-bar">
                              <Button onClick={ () => this.setState({ cancelOpen: false }) }>Continue Deployment</Button>
                              <Button bsStyle="danger" onClick={ this.cancel.bind(this) }>Cancel Deployment</Button>
                            </div>
                          </p>
                        </Alert>
                      }
                    </div>
                  </div>
                }
                {
                  deploymentStatus === deploymentActions.RUN_COMPLETE &&
                  <div>
                    <h3>Deployment Complete!</h3>
                    <ProgressBar bsStyle="success" now={ 100 } />
                  </div>
                }
              </div>
              {
                deploymentResults.length > 0 &&
                <div>
                  <div className="text-center">
                    <Button onClick={ this.downloadFile.bind(this) }>Save Results to File</Button>
                  </div>
                  <Alert bsStyle="success" className="next-steps">
                    To get your campaign added to the Giveth Directory of Campaigns and fully utilize our UI, please download the file that was generated with your deployment information and get in contact with Griff Green (@griff) on the Giveth Slack. Join our Slack by entering your email at <a target="_blank" href="http://slack.giveth.io">slack.giveth.io</a>
                  </Alert>
                  <DeploymentResults domain={ this.state.domain } />
                  <div className="text-center">
                    <Button bsStyle="success" onClick={ this.reset.bind(this) }>Deploy Another Campaign</Button>
                  </div>
                </div>
              }
            </Col>
          </Row>
          {
            deploymentStatus != deploymentActions.RUN_COMPLETE &&
            <Row>
              <Col md={ 10 }>
                <Form horizontal className="campaign-form">
                  <FormGroup controlId='userAccount'>
                    <Col componentClass={ ControlLabel } md={ 4 }>Sender</Col>
                    <Col md={ 8 }>
                      <FormControl
                        disabled={ deploymentStatus === deploymentActions.RUN_IN_PROGRESS }
                        type="text"
                        value={ userAccount }
                        onChange={ this.updateUser.bind(this) } />
                    </Col>
                  </FormGroup>
                  <Field
                    fieldName="escapeCaller"
                    fieldText="Escape Caller"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'escapeCaller') }>
                  </Field>
                  <Field
                    fieldName="escapeDestination"
                    fieldText="Escape Destination"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'escapeDestination') }>
                  </Field>
                  <Field
                    fieldName="securityGuard"
                    fieldText="Security Guard"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'securityGuard') }>
                  </Field>
                  <Field
                    fieldName="arbitrator"
                    fieldText="Arbitrator"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'arbitrator') }>
                  </Field>
                  <Field
                    fieldName="donor"
                    fieldText="Donor"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'donor') }>
                  </Field>
                  <Field
                    fieldName="recipient"
                    fieldText="Recipient"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'recipient') }>
                  </Field>
                  <Field
                    fieldName="tokenName"
                    fieldText="Token Name"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'tokenName') }>
                  </Field>
                  <Field
                    fieldName="tokenSymbol"
                    fieldText="Token Symbol"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'tokenSymbol') }>
                  </Field>
                  <Field
                    fieldName="campaignName"
                    fieldText="Campaign Name"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'campaignName') }>
                  </Field>
                  <Field
                    fieldName="campaignDescription"
                    fieldText="Campaign Description"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'campaignDescription') }>
                  </Field>
                  <Field
                    fieldName="campaignUrl"
                    fieldText="Campaign Url"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'campaignUrl') }>
                  </Field>
                  <Field
                    fieldName="campaignExtra"
                    fieldText="Campaign Extra"
                    deploymentStatus={ deploymentStatus }
                    campaignValues={ campaignValues }
                    handleChange={ this.handleChange.bind(this, 'campaignExtra') }>
                  </Field>
                  <Row>
                    <Col md={ 10 } mdOffset={ 2 }>
                      <Alert bsStyle="info">
                        The Campaign Deployer deploys a number of contracts to the Ethereum blockchain.
                        You will be prompted to Accept each transaction.
                        Each transaction may take a minute or more to be mined.  Please be patient.
                        Navigating away from this page will cancel the deployment process, and all progress will be lost.
                        If you have an issue deploying, confirm Metamask is set to the Main Ethereum Network and refresh the page.
                      </Alert>
                    </Col>
                  </Row>
                  <Row className="pullRight">
                    <Col md={ 2 } mdOffset={ 10 }>
                      <Button bsStyle="success" onClick={ this.runDeployment.bind(this) } disabled={ (!this.state.edited || deploymentStatus === deploymentActions.RUN_IN_PROGRESS) } >Run Deployment</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          }
        </div>
      </div>
    );
  }

};
