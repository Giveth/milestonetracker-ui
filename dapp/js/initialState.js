module.exports = () => (
    {
        userAccount: "",
        error: null,
        campaignValues: {
            escapeCaller: "",  
            escapeDestination: "0x32bacc8B241FB172fEE18bDa32527126c6f3c5f7",
            securityGuard: "", 
            arbitrator: "0x32bacc8b241fb172fee18bda32527126c6f3c5f7", // Giveth Multisig
            donor: "",  
            recipient: "",
            tokenName: "",
            tokenSymbol: "",
            campaignName: "",
            campaignDescription: "",
            campaignUrl: "",
            campaignExtra: "",
        },
        deploymentStatus: "RUN_UNSTARTED",
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
        deploymentResults: {},
    }
);
