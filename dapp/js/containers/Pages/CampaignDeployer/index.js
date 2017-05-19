/* eslint-disable */
import { connect } from 'react-redux';
import Component from "./Component";
import { bindActionCreators } from 'redux';
import { runDeployment, updateCampaignValues, reset, cancel } from '../../../actions/campaignDeployment';
import { setAccount } from '../../../actions/user';

const mapStateToProps = ({ userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error }) =>
                        ({ userAccount, campaignValues, deploymentStatus, deploymentResults, completedDeployments, currentDeploymentStep, error });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ runDeployment, updateCampaignValues, setAccount, reset, cancel }, dispatch);
}

const CampaignDeployer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default CampaignDeployer;
