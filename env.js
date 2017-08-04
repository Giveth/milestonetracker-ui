const Web3 = require("web3");
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const BigNumber = require("bignumber.js");

const eth = web3.eth;
const async = require("async");

const GivethDirectory = require("givethdirectory");
const Vault = require("vaultcontract");
const MiniMeToken = require("minimetoken");
const MilestoneTracker = require("milestonetracker");
const GivethCampaign = require("givethcampaign");

const gcb = (err, res) => {
    if (err) {
        console.log(`ERROR: ${ err }`);
    } else {
        console.log(JSON.stringify(res, null, 2));
    }
};

let givethDirectory;
const vault = [];
const miniMeToken = [];
const milestoneTracker = [];
const givethCampaign = [];

const now = Math.floor(new Date().getTime() / 1000);

// Where all the addresses are defined... if you want to show off this test, you better have these addresses
const escapeHatchCaller = eth.accounts[ 1 ];
const escapeHatchDestination = eth.accounts[ 2 ];
const securityGuard = eth.accounts[ 3 ];
const arbitrator = eth.accounts[ 4 ];
const donor = eth.accounts[ 5 ];
const recipient = eth.accounts[ 6 ];
const reviewer = eth.accounts[ 7 ];
const milestoneLeadLink = eth.accounts[ 8 ];

function deployCampaign(opts, _cb) {
    const cb = _cb || gcb;
    let idCampaign;
    async.series([
        (cb1) => {
            givethDirectory.contract.numberOfCampaigns((err, res) => {
                idCampaign = res.toNumber();
                cb1();
            });
        },
        (cb1) => {
            GivethCampaign.deploy(
                web3,
                {
                    tokenName: opts.tokenName || "MiniMe Test Token",
                    decimalUnits: 18,
                    tokenSymbol: opts.tokenSymbol || "MMT",
                    escapeHatchCaller,
                    escapeHatchDestination,
                    securityGuard,
                    startFundingTime: now - 86400,
                    endFundingTime: now + (86400 * 365 * 30),
                    maximumFunding: web3.toWei(10000),
                    absoluteMinTimeLock: 0,
                    timeLock: 30,
                    maxSecurityGuardDelay: 86400 * 21,
                },
                (err, _givethCampaign) => {
                    if (err) {
                        cb1(err);
                        return;
                    }
                    givethCampaign[ idCampaign ] = _givethCampaign;
                    console.log(`GivethCampaign : ${ _givethCampaign.contract.address }`);
                    cb1();
                });
        },
        (cb1) => {
            givethCampaign[ idCampaign ].getState((err, st) => {
                if (err) {
                    cb1(err);
                    return;
                }
                miniMeToken[ idCampaign ] = new MiniMeToken(web3, st.tokenAddress);
                console.log(`MiniMeToken : ${ miniMeToken[ idCampaign ].contract.address }`);
                vault[ idCampaign ] = new Vault(web3, st.vaultAddress);
                console.log(`Vault : ${ vault[ idCampaign ].contract.address }`);
                cb1();
            });
        },
        (cb1) => {
            MilestoneTracker.deploy(
                web3,
                {
                    arbitrator,
                    donor,
                    recipient,
                },
                (err, _milestoneTracker) => {
                    if (err) {
                        cb1(err);
                        return;
                    }
                    milestoneTracker[ idCampaign ] = _milestoneTracker;
                    console.log(`MilestoneTracker : ${ milestoneTracker[ idCampaign ].contract.address }`);
                    cb1();
                });
        },
        (cb1) => {
            console.log("Authorize Spender");
            vault[ idCampaign ].contract.authorizeSpender(
                milestoneTracker[ idCampaign ].contract.address,
                true,
                {
                    from: eth.accounts[ 0 ],
                },
                cb1);
        },
        (cb1) => {
            console.log("Add Campaign");
            givethDirectory.contract.addCampaign(
                opts.campaignName || "Giveth Test",
                opts.campaignDescription || "Development of Giveth. Donations 3.0",
                opts.campaignWeb || "http://www.giveth.io",
                miniMeToken[ idCampaign ].contract.address,
                vault[ idCampaign ].contract.address,
                milestoneTracker[ idCampaign ].contract.address,
                "", { from: eth.accounts[ 0 ], gas: 4000000 }, cb1);
        },
        (cb1) => {
            console.log("Change campaign status");
            givethDirectory.contract.changeStatus(idCampaign, 1, { from: eth.accounts[ 0 ] }, cb1);
        },
    ], cb);
}

function getRef(idx) {
    let ref = new BigNumber(idx).toString(16);
    while (ref.length < 64) ref = `0${ ref }`;
    return `0x${ ref }`;
}

function deployExample2(_cb) {
    const cb = _cb || gcb;
    let milestones;
    let hashProposals;
    async.series([
        (cb1) => {
            GivethDirectory.deploy(web3, {}, (err, _givethDirectory) => {
                if (err) {
                    cb1(err);
                    return;
                }
                givethDirectory = _givethDirectory;
                console.log(`Giveth Directory: ${ givethDirectory.contract.address }`);
                cb1();
            });
        },
        (cb1) => {
            deployCampaign({
                tokenName: "Giveth Development",
                tokenSymbol: "MM1",
                campaignName: "Test Campaign for Giveth Dev work",
                campaignDescription: "This is a test of the emergency deploy system, do not run to donate to this campaign, it is only a test... but feel free to donate Giveth as you wish ;-) 0xf19c536ab792f173b7ee62d9ccc51f4ed6180773",
                campaignWeb: "http://www.giveth.io/?idCampaign=1",
            }, cb1);
        },
        (cb1) => {
            deployCampaign({
                tokenName: "MyEtherWallet Donation Test Tokens",
                tokenSymbol: "MM2",
                campaignName: "Test Campaign for MEW",
                campaignDescription: "This campaign, when real, will be a cult classic ;-)",
                campaignWeb: "http://www.giveth.io/?idCampaign=2",
            }, cb1);
        },
        (cb1) => {
            deployCampaign({
                tokenName: "Swarm City Donation Test Tokens",
                tokenSymbol: "MM3",
                campaignName: "Test Campaign for Swarm City",
                campaignDescription: "Decentralizing.... EVERYTHING these guys are pros with the Minime Token, so this test is really just over the top",
                campaignWeb: "http://www.giveth.io/?idCampaign=3",
            }, cb1);
        },
        (cb1) => {
            milestones = [
                {
                    description: "Making T-shirts: Everyone company needs some good Schwag. We are going to submit designs to the Ethereum Purchasing Coop to get this party started.  We want $5400 USD in ETH at the market rate to be split between Ariel ($2900) and CJ ($2500) upon the receipt of the 500 shirts. This will cover everything, our predesign work, the cost of the 500 T-shirts and all the little things that it takes to get a massive order like this done.",
                    url: "http://www.giveth.io/?idProposal=1",
                    minCompletionDate: now - 86400,
                    maxCompletionDate: now + (86400 * 6),
                    reviewer,
                    milestoneLeadLink,
                    reviewTime: 86400 * 2,
                    paymentSource: vault[ 0 ].contract.address,
                    payData: vault[ 0 ].contract.authorizePayment.getData("Making T-shirts", getRef(0), recipient, web3.toWei(100), 0),
                    payDescription: "Making T-shirts",
                    payRecipient: recipient,
                    payValue: new BigNumber(web3.toWei(500)),
                    payDelay: 0,
                },
                {
                    description: "Build the Landing page for the Website: I will probably just grab some nice templates off a website and throw this up as quickly as possible, we will do many iterations, but I will need your help on the content... as I'm a designer not a writer :-D. I am doing this mostly as a service to the community, but I would love to get 5 ETH for my work upon completion.",
                    url: "http://www.giveth.io/?idProposal=1",
                    minCompletionDate: now - 86400,
                    maxCompletionDate: now + (86400 * 3),
                    reviewer,
                    milestoneLeadLink,
                    reviewTime: 86400 * 2,
                    paymentSource: vault[ 0 ].contract.address,
                    payData: vault[ 0 ].contract.authorizePayment.getData("First Website", getRef(1), recipient, web3.toWei(5), 0),
                    payDescription: "First Website",
                    payRecipient: recipient,
                    payValue: new BigNumber(web3.toWei(5)),
                    payDelay: 0,
                },
                {
                    description: "Double the donations in this DCO in 30 days: I want to help raise money for this project. If I can double the amount of ETH in this DCO in the next 30 days then I will get 100 ETH for my promotional work",
                    url: "http://www.giveth.io/?idProposal=1",
                    minCompletionDate: now - 86400,
                    maxCompletionDate: now + (86400 * 6),
                    reviewer,
                    milestoneLeadLink,
                    reviewTime: 86400 * 2,
                    paymentSource: vault[ 0 ].contract.address,
                    payData: vault[ 0 ].contract.authorizePayment.getData("Double Donations", getRef(2), recipient, web3.toWei(100), 0),
                    payDescription: "Double Donations",
                    payRecipient: recipient,
                    payValue: new BigNumber(web3.toWei(100)),
                    payDelay: 0,
                },
                {
                    description: "Hire a Brand Manager. We are starting to make a real traction and I think its time that we have a full time person who just manages the brand, and dives into to our decentralized mess to give our brand recognition to the world. I worked in HR many years ago and recently retired from being the CEO of a successful business in the Tech industry, I know how to hire people and it's not an easy job. I will do it free as I don't need the money, but I would like my expenses to be covered, basically 5 lunches with the top 5 applicants at $60 a lunch. so $300 in ETH at the market rate upon the successful hiring of a brand manager, after they have worked for 1 week and fit into our culture.",
                    url: "http://www.giveth.io/?idProposal=1",
                    minCompletionDate: now - 86400,
                    maxCompletionDate: now + (86400 * 20),
                    reviewer,
                    milestoneLeadLink,
                    reviewTime: 86400 * 2,
                    paymentSource: vault[ 0 ].contract.address,
                    payData: vault[ 0 ].contract.authorizePayment.getData("Hire a Brand Manager", getRef(3), recipient, web3.toWei(100), 0),
                    payDescription: "Hire a Brand Manager",
                    payRecipient: recipient,
                    payValue: new BigNumber(web3.toWei(100)),
                    payDelay: 0,
                },
                {
                    description: "Brand Manager Salary: This is a monthly installment to keep our brand manager employed. They are to receive $5000 a month in ETH at the market rate to for bringing a consistent brand to the external community. They will rewrite this milestone when they are hired :-).",
                    url: "http://www.giveth.io/?idProposal=1",
                    minCompletionDate: now - 86400,
                    maxCompletionDate: now + (86400 * 8),
                    reviewer,
                    milestoneLeadLink,
                    reviewTime: 86400 * 2,
                    paymentSource: vault[ 0 ].contract.address,
                    payData: vault[ 0 ].contract.authorizePayment.getData("Brand Manager Salary", getRef(4), recipient, web3.toWei(100), 0),
                    payDescription: "Brand Manager Salary",
                    payRecipient: recipient,
                    payValue: new BigNumber(web3.toWei(100)),
                    payDelay: 0,
                },
            ];

            console.log("Propose");
            milestoneTracker[ 0 ].proposeMilestones({
                newMilestones: milestones,
                from: recipient,
            }, cb1);
        },
        (cb1) => {
            console.log("Propose");
            milestoneTracker[ 1 ].proposeMilestones({
                newMilestones: milestones,
                from: recipient,
            }, cb1);
        },
        (cb1) => {
            console.log("Get State");
            milestoneTracker[ 0 ].getState((err, st) => {
                if (err) {
                    cb1(err);
                    return;
                }
                hashProposals = st.proposedMilestonesHash;
                cb1();
            });
        },
        (cb1) => {
            console.log("Accept");
            milestoneTracker[ 0 ].acceptProposedMilestones({
                hashProposals,
                from: donor,
                verbose: true,
            }, cb1);
        },
        (cb1) => {
            console.log("Mark Done 1");
            milestoneTracker[ 0 ].markMilestoneComplete({
                idMilestone: 0,
                from: recipient,
            }, cb1);
        },
        (cb1) => {
            console.log("Mark Done 2");
            milestoneTracker[ 0 ].markMilestoneComplete({
                idMilestone: 1,
                from: recipient,
            }, cb1);
        },
        (cb1) => {
            console.log("Approve");
            milestoneTracker[ 0 ].approveCompletedMilestone({
                idMilestone: 0,
                from: reviewer,
            }, cb1);
        },
        (cb1) => {
            console.log("Buy tokens 1");
            givethCampaign[ 0 ].donate({
                from: eth.accounts[ 0 ],
                owner: eth.accounts[ 0 ],
                value: web3.toWei(30),
            }, cb1);
        },
        (cb1) => {
            console.log("Buy tokens 2");
            givethCampaign[ 0 ].donate({
                from: eth.accounts[ 1 ],
                owner: eth.accounts[ 1 ],
                value: web3.toWei(40),
            }, cb1);
        },
        (cb1) => {
            console.log("Buy tokens 3");
            givethCampaign[ 0 ].donate({
                from: eth.accounts[ 2 ],
                owner: eth.accounts[ 2 ],
                value: web3.toWei(40),
            }, cb1);
        },
    ], cb);
}

deployExample2((err) => {
    if (err) {
        console.log(`ERROR: ${ err }`);
        return;
    }
    givethDirectory.getState(gcb);
});
