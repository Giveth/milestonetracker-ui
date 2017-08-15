/* eslint-disable */
import { connect } from 'react-redux';
import Component from "./Component";
import { bindActionCreators } from 'redux';
import { runDeployment, updateCampaignValues, reset, cancel, removeError, showError } from '../../../actions/campaignDeployment';
import setAccount from '../../../actions/user';

const mapStateToProps = ({ userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error, web3 }) => {
    return {
        userAccount,
        campaignValues,
        deploymentStatus,
        deploymentResults,
        completedDeployments,
        currentDeploymentStep,
        error,
        accounts: web3.accounts,
    };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, updateCampaignValues, setAccount, reset, cancel, removeError, showError }, dispatch);
}

const CampaignDeployer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default CampaignDeployer;
