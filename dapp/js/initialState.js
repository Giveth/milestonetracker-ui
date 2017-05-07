/* eslint-disable */
module.exports = function() {
  return {
    userAccount: '',
    error: null,
    campaignValues: {
      escapeCaller: '0x839395e20bbB182fa440d08F850E6c7A8f6F0780',  // Jordi
      escapeDestination: '0x32bacc8B241FB172fEE18bDa32527126c6f3c5f7',
      securityGuard: '0x839395e20bbb182fa440d08f850e6c7a8f6f0780', // Griff
      arbitrator: '0x32bacc8b241fb172fee18bda32527126c6f3c5f7', // Giveth Multisig
      donor: '0x839395e20bbb182fa440d08f850e6c7a8f6f0780',  // Griff
      recipient: '0x839395e20bbb182fa440d08f850e6c7a8f6f0780',
      tokenName: '',
      tokenSymbol: '',
      campaignName: '',
      campaignDescription: '',
      campaignUrl: '',
      campaignExtra: ''
    },
    deploymentStatus: 'RUN_UNSTARTED',
    currentDeploymentStep: null,
    completedDeployments: {
      miniMeTokenFactoryContract: false,
      miniMeTokenContract: false,
      vaultContract: false,
      campaignContract: false,
      controllerUpdate: false,
      milestoneTrackerContract: false,
      spenderAuthorization: false,
      campaignAdd: false,
    },
    deploymentResults: {}
  };
}
