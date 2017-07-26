# More on milestone-tracker-ui dapp

## diagrams
![contracts diagram](contracts_diagram.png?raw=true)
[edit](https://docs.google.com/drawings/d/1OVnJWXs_-AKqcXxHwuioFdAbaPUok7I_brWMFGPRUDg/edit?usp=sharing)

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
* **dapp/js** - all content and actions are in javascript or jsx  
* **dapp/js/blockchain** - determine network for campaign directory and http provider for web3  
* **dapp/js/components** - jsx ui components  
* **dapp/static** - index.html, style.css  
* **dapp/static/img** - logo, and spinner  
* **test/contract** - contract test  

## root config files
* **.babelrc** - config to transform JSX into createElement calls [more](https://babeljs.io/docs/plugins/preset-react/)  
* **.editorconfig** - defines consistent coding styles between different editors and IDEs. [more](http://editorconfig.org/)  
* **.eslintrc** - configs for javascript linter [more](http://eslint.org/docs/user-guide/configuring)  
* **.gitignore** -  determine which files and directories to ignore [more](https://help.github.com/articles/ignoring-files/)  
* **.travis.yml** - continuous integration service for projects hosted at GitHub [more](https://docs.travis-ci.com/user/getting-started/)  
* **LICENSE** - GNU General Public License v3.0 [more](https://www.gnu.org/licenses/gpl-3.0.en.html)  
* **README.md** - documentation for installing dapp [more](https://help.github.com/categories/writing-on-github/)  
* **mocha-webpack.opts** - precompiles your server-side webpack bundles before running mocha [more](https://www.npmjs.com/package/mocha-webpack)  
* **package.json** - list of imported software dependencies [more](https://docs.npmjs.com/files/package.json)  
* **webpack.config.js** -  takes dependencies and bundles them into static assets [more](https://webpack.github.io/docs/what-is-webpack.html)  
* **webpack.config.test.js** - a good way to run unit tests [more](https://blog.threatstack.com/unit-testing-with-webpack-mocha)  


## js file notes
### dapp/js/actions/...
* **actionTypes.js** - constants for milestone new save and milestone new remove  
* **campaignActions.js** - export campaign directory donate as donate and milestone tracker functions accept milestones, reject milestones, propose new milestones as constants    
* **campaignDeployments.js** - export deployment action functions from constants, export thunks, get and set gas price, create and deploy minime token factory contract, create and deploy minime token contract, create and deploy vault contract,  create and deploy campaign contract, change token controller, create and deploy milestone tracker contract, authorize spender, get giveth directory instance, and add campaign to tracker  
* **index.js** - export new web3 and new giveth directory state  
* **milestoneActions.js** - export milestone functions that instantiate new milestone tracker and call single function for arbitrate approve completed, cancel, mark completed, approve completed, reject completed, collect, request payment, save milestone, and remove milestone  
* **user.js** - export default function to set account using user actions from constants  

### dapp/js/blockchain/...
* **index.js** - export web3 and network  
* **Network.js** - determine network blockchain network and use same address for giveth directory and campaign tracker  
* **Web3.js** - determine http server for w3

### dapp/js/containers/Buttons/Campaign/...
* **AcceptMilestones.js** - map campaign action to on accept milestones handler and declare accept milestones to connect props to button accept milestones  
* **Donate.js** - map campaign action to on donate handler and declare donate to connect props to button donate  
* **index.js** - export accept milestones, donate, propose new milestones, and reject milestones  
* **ProposeNewMilestones.js** - map campaign action to propose new milestone handler and declare propose new milestones to connect props to button propose new milestones component  
* **RejectMilestones.js** - map campaign action to on un-propose milestone handler and declare reject milestone to connect props to button reject milestones  

### dapp/js/containers/Buttons/Milestones/...
* **ApproveCompleted.js** - map milestone action to click action property and declare approve completed to connect props to milestone button  
* **ArbitrateApproveCompleted.js** - map milestone action to click action property and declare arbitrate approved completed to connect props to milestone button  
* **Cancel.js** - map milestone action to click action property and declare cancel to connect props to milestone button  
* **Collect.js** - map milestone action to click action property and declare collect to connect props to milestone button  
* **index.js** - export approve completed, arbitrate approve completed, cancel, collect, mark completed, reject completed, request payment  
* **MarkCompleted.js** - map milestone action to click action property and declare mark completed to connect props to milestone button  
* **RejectCompleted.js** - map milestone action to click action property and declare reject completed to connect props to milestone button  
* **RequestPayment.js** - map milestone action to click action property and declare request payment to connect props to milestone button  

### dapp/js/containers/Pages/CampaignDeployer/...
* **Component.jsx** - export class deployer, render campaign deployer, declare run deployment function and others  
* **index.js** - map campaign deployment actions as parameters to bind action creators and declare campaign deployer to connect props to component  

### dapp/js/containers/Pages/...
* **About.js** - map state to giveth directory state property and declare page about to connect props to about   
* **Campaign.js** - map state to campaigns property and declare page campaign to connect props to campaign   
* **Campaigns.js** - map state to campaigns property and declare page campaigns to connect props to campaigns  
* **Home.js** - map state to full state property and declare page home to connect props to home  
* **index.js** - export page about, page campaign, page campaigns, page my account, page home, page campaign deployer  
* **MyAccount.js** - map state to giveth directory state and web3 state properties and declare page my account to connect props to my account  

### dapp/js/containers/...
* **CampaignMilestones.js** - map state to new milestones and accounts properties and declare campaign milestones to connect props to campaign milestones component  
* **index.jsx** - export my account container, web3 info, web3 error popup  
* **InputMyAddresses.jsx** - map state to accounts properties and declare input my address to connect props to input my addresses component  
* **MilestoneDetailEditable.js** - map milestone actions to save and remove properties and declare milestone detail editable to connect props to milestone detail editable component  
* **MilestoneEdit.jsx** - declare class milestone edit component and render input fields  
* **MyAccountContainer.js** - map state to giveth directory state property and declare my account container to connect props to web3 info  
* **Navigation.jsx** - map state to web3 state property and declare navigation to connect props to navigation component  
* **Web3ErrorPopup.js** - map false state to visible property and declare web3 error popup to connect props to error popup component  
* **Web3Info.js** - map state to web3 state property and declare web3 info to connect props to web3 info component  

### dapp/js/lib/...
* **Web3monitor.js** - declare default class which extends event emitter from events  

### dapp/js/reducers/...
* **deploymentReducer.js** - export functions with state and action parameters for campaign values, deployment status, current deployment step, deployment results, completed deployments, and error  
* **givethdirectory.js** - giveth directory function which takes empty state object and action to return state  
* **index.js** - export reducers as combined reducers for campaign values, deployment results, deployment status, completed deployments, current deployment step, error, user account, web3, giveth directory, and new milestones  
* **newMilestones.js** - export new milestones which takes initial state and action parameters and uses action type to determine behavior  
* **newMilestones.js** - export default function for user account which take empty string state and action parameters and uses action type to set account  
* **web3.js** - web3 function which takes connected false state and action parameters and uses action type to return state  

### dapp/js/...
* **contants.js** - export string constants  
* **initialState.js** - module exports function returns object with keys for user account, error, campaign values, deployment status, current deployment step, completed deployments, deployment results  
* **main.jsx** - declare web3 monitor with web3 from blockchain and render provider and routes  
* **routes.jsx** - declare routes and define switch component linking paths to pages  
* **store.js** - declare middleware with thunk and logger parameters, and declare store with reducer, initial state, and middleware parameters  
* **validator.js** - defines website validator using regex and ethereum address validator using web3
