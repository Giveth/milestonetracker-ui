# More on milestone-tracker-ui dapp

## diagrams
![contracts diagram](contracts_diagram.png?raw=true)
## folder structure
  ```
  dapp
  |____js
  | |____actions
  | |____blockchain
  | |____components
  | |____containers
  | | |____Buttons
  | | | |____Campaign
  | | | |____Milestone
  | | |____Pages
  | |   |____CampaignDeployer
  | |____lib
  | |____reducers
  |____static
  |     |____img
  test
  |____contract
  ```

## folder notes
<span style="color:#87CEFA">dapp/js</span> - all content and actions are in javascript or jsx  
<span style="color:#87CEFA">dapp/js/blockchain</span> - determine network for campaign directory and http provider for web3  
<span style="color:#87CEFA">dapp/js/components</span> - jsx ui components  
<span style="color:#87CEFA">dapp/static</span> - index.html, style.css  
<span style="color:#87CEFA">dapp/static/img</span> - logo, and spinner  
<span style="color:#87CEFA">test/contract</span> - contract test  

## root config files
<span style="color:#87CEFA">.babelrc</span> - config to transform JSX into createElement calls [more](https://babeljs.io/docs/plugins/preset-react/)  
<span style="color:#87CEFA">.editorconfig</span> - defines consistent coding styles between different editors and IDEs. [more](http://editorconfig.org/)  
<span style="color:#87CEFA">.eslintrc</span> - configs for javascript linter [more](http://eslint.org/docs/user-guide/configuring)  
<span style="color:#87CEFA">.gitignore</span> -  determine which files and directories to ignore [more](https://help.github.com/articles/ignoring-files/)  
<span style="color:#87CEFA">.travis.yml</span> - continuous integration service for projects hosted at GitHub [more](https://docs.travis-ci.com/user/getting-started/)  
<span style="color:#87CEFA">LICENSE</span> - GNU General Public License v3.0 [more](https://www.gnu.org/licenses/gpl-3.0.en.html)  
<span style="color:#87CEFA">README.md</span> - documentation for installing dapp [more](https://help.github.com/categories/writing-on-github/)  
<span style="color:#87CEFA">mocha-webpack.opts</span> - precompiles your server-side webpack bundles before running mocha [more](https://www.npmjs.com/package/mocha-webpack)  
<span style="color:#87CEFA">package.json</span> - list of imported software dependencies [more](https://docs.npmjs.com/files/package.json)  
<span style="color:#87CEFA">webpack.config.js</span> -  takes dependencies and bundles them into static assets [more](https://webpack.github.io/docs/what-is-webpack.html)  
<span style="color:#87CEFA">webpack.config.test.js</span> - a good way to run unit tests [more](https://blog.threatstack.com/unit-testing-with-webpack-mocha)  


## js file notes
**dapp/js/actions/...**  
<span style="color:#87CEFA">actionTypes.js</span> - constants for MILESTONE_NEW_SAVE and MILESTONE_NEW_REMOVE  
<span style="color:#87CEFA">campaignActions.js</span> - export campaign directory.donate as donate and MilestoneTracker functions acceptMilestones, rejectMilestones, proposeNewMilestones as constants    
<span style="color:#87CEFA">campaignDeployments.js</span> - export deployment action functions from constants, export thunks, get and set gas price, create and deploy minime token factory contract, create and deploy minime token contract, create and deploy vault contract,  create and deploy campaign contract, change token controller, create and deploy milestone tracker contract, authorize spender, get giveth directory instance, and add campaign to tracker  
<span style="color:#87CEFA">index.js</span> - export new web3 and new giveth directory state  
<span style="color:#87CEFA">milestoneActions.js</span> - export milestone functions that instantiate new MilestoneTracker and call single function for arbitrate approve completed, cancel, mark completed, approve completed, reject completed, collect, request payment, save milestone, and remove milestone  
<span style="color:#87CEFA">user.js</span> - export default function to set account using user actions from constants  

**dapp/js/blockchain/...**  
<span style="color:#87CEFA">index.js</span> - export web3 and network  
<span style="color:#87CEFA">Network.js</span> - determine network blockchain network and use same address for giveth directory and campaign tracker  
<span style="color:#87CEFA">Web3.js</span> - determine http server for w3

**dapp/js/containers/Buttons/Campaign/...**  
<span style="color:#87CEFA">AcceptMilestones.js</span> - map campaign action to on accept milestones handler and declare accept milestones to connect props to button accept milestones  
<span style="color:#87CEFA">Donate.js</span> - map campaign action to on donate handler and declare donate to connect props to button donate  
<span style="color:#87CEFA">index.js</span> - export accept milestones, donate, propose new milestones, and reject milestones  
<span style="color:#87CEFA">ProposeNewMilestones.js</span> - map campaign action to propose new milestone handler and declare propose new milestones to connect props to button propose new milestones component  
<span style="color:#87CEFA">RejectMilestones.js</span> - map campaign action to on un-propose milestone handler and declare reject milestone to connect props to button reject milestones  

**dapp/js/containers/Buttons/Milestones/...**  
<span style="color:#87CEFA">ApproveCompleted.js</span> - map milestone action to click action property and declare approve completed to connect props to milestone button  
<span style="color:#87CEFA">ArbitrateApproveCompleted.js</span> - map milestone action to click action property and declare arbitrate approved completed to connect props to milestone button  
<span style="color:#87CEFA">Cancel.js</span> - map milestone action to click action property and declare cancel to connect props to milestone button  
<span style="color:#87CEFA">Collect.js</span> - map milestone action to click action property and declare collect to connect props to milestone button  
<span style="color:#87CEFA">index.js</span> - export approve completed, arbitrate approve completed, cancel, collect, mark completed, reject completed, request payment  
<span style="color:#87CEFA">MarkCompleted.js</span> - map milestone action to click action property and declare mark completed to connect props to milestone button  
<span style="color:#87CEFA">RejectCompleted.js</span> - map milestone action to click action property and declare reject completed to connect props to milestone button  
<span style="color:#87CEFA">RequestPayment.js</span> - map milestone action to click action property and declare request payment to connect props to milestone button  

**dapp/js/containers/Pages/CampaignDeployer/...**  
<span style="color:#87CEFA">Component.jsx</span> - export class deployer, render campaign deployer, declare run deployment function and others  
<span style="color:#87CEFA">index.js</span> - map campaign deployment actions as parameters to bind action creators and declare campaign deployer to connect props to component  

**dapp/js/containers/Pages/...**  
<span style="color:#87CEFA">About.js</span> - map state to giveth directory state property and declare page about to connect props to about   
<span style="color:#87CEFA">Campaign.js</span> - map state to campaigns property and declare page campaign to connect props to campaign   
<span style="color:#87CEFA">Campaigns.js</span> - map state to campaigns property and declare page campaigns to connect props to campaigns  
<span style="color:#87CEFA">Home.js</span> - map state to full state property and declare page home to connect props to home  
<span style="color:#87CEFA">index.js</span> - export page about, page campaign, page campaigns, page my account, page home, page campaign deployer  
<span style="color:#87CEFA">MyAccount.js</span> - map state to giveth directory state and web3 state properties and declare page my account to connect props to my account  

**dapp/js/containers/...**  
<span style="color:#87CEFA">CampaignMilestones.js</span> - map state to new milestones and accounts properties and declare campaign milestones to connect props to campaign milestones component  
<span style="color:#87CEFA">index.jsx</span> - export my account container, web3 info, web3 error popup  
<span style="color:#87CEFA">InputMyAddresses.jsx</span> - map state to accounts properties and declare input my address to connect props to input my addresses component  
<span style="color:#87CEFA">MilestoneDetailEditable.js</span> - map milestone actions to save and remove properties and declare milestone detail editable to connect props to milestone detail editable component  
<span style="color:#87CEFA">MilestoneEdit.jsx</span> - declare class milestone edit component and render input fields  
<span style="color:#87CEFA">MyAccountContainer.js</span> - map state to giveth directory state property and declare my account container to connect props to web3 info  
<span style="color:#87CEFA">Navigation.jsx</span> - map state to web3 state property and declare navigation to connect props to navigation component  
<span style="color:#87CEFA">Web3ErrorPopup.js</span> - map false state to visible property and declare web3 error popup to connect props to error popup component  
<span style="color:#87CEFA">Web3Info.js</span> - map state to web3 state property and declare web3 info to connect props to web3 info component  

**dapp/js/lib/...**  
<span style="color:#87CEFA">Web3monitor.js</span> - declare default class which extends event emitter from events  

**dapp/js/reducers/...**  
<span style="color:#87CEFA">deploymentReducer.js</span> - export functions with state and action parameters for campaign values, deployment status, current deployment step, deployment results, completed deployments, and error  
<span style="color:#87CEFA">givethdirectory.js</span> - giveth directory function which takes empty state object and action to return state  
<span style="color:#87CEFA">index.js</span> - export reducers as combined reducers for campaign values, deployment results, deployment status, completed deployments, current deployment step, error, user account, web3, giveth directory, and new milestones  
<span style="color:#87CEFA">newMilestones.js</span> - export new milestones which takes initial state and action parameters and uses action type to determine behavior  
<span style="color:#87CEFA">newMilestones.js</span> - export default function for user account which take empty string state and action parameters and uses action type to set account  
<span style="color:#87CEFA">web3.js</span> - web3 function which takes connected false state and action parameters and uses action type to return state  

**dapp/js/...**  
<span style="color:#87CEFA">contants.js</span> - export string constants  
<span style="color:#87CEFA">initialState.js</span> - module exports function returns object with keys for user account, error, campaign values, deployment status, current deployment step, completed deployments, deployment results  
<span style="color:#87CEFA">main.jsx</span> - declare web3 monitor with web3 from blockchain and render provider and routes  
<span style="color:#87CEFA">routes.jsx</span> - declare routes and define switch component linking paths to pages  
<span style="color:#87CEFA">store.js</span> - declare middleware with thunk and logger parameters, and declare store with reducer, initial state, and middleware parameters  
<span style="color:#87CEFA">validator.js</span> - defines website validator using regex and ethereum address validator using web3
