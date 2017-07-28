# Milestone Tracker User Interface

The MilestoneTracker UI is a user interface for the [MilestoneTracker](https://github.com/Giveth/milestonetracker) contract and in future will be extended to cover the whole functionality of [Giveth DAC](https://github.com/Giveth/MVP) (Decentralized Altruistic Community).

The application is written in React and interfaces directly with the Ethereum blockchain via the Giveth smart contracts. You can find the production version of this decentralized application (Dapp) and more information on the [Giveth website](https://giveth.io).

NOTE: For contributing code use the "develop" branch of this project repository. The develop branch is deployed here: https://develop--milestonetracker.netlify.com/#/ 

We also use [ZenHub](https://www.zenhub.com/) to provide a trello like interface for managing our github issues. Picking issues from the `Backlog` lane would be the best place to start contributing.

## How to run developer version
### Installing dependencies
1. Make sure you have installed [Node.js](https://nodejs.org/en/)
2. If not already, install Ethereum [testrpc](https://github.com/ethereumjs/testrpc)
    ```
    npm install -g ethereumjs-testrpc
    ```
3. Clone the repository
    ```
    # Clone the MilestoneTracker UI repository
    git clone git@github.com:Giveth/milestonetracker-ui.git

    cd milestonetracker-ui
    ```
4. Install dependencies
    ```
    npm install
    ```

### Running developer version
1. Run a local Ethereum node with JSON-RPC listening at port 8545 in deterministic mode.

  ```bash
  testrpc --deterministic
  ```

2. In new terminal window load the example data.

  ```bash
  cd node_modules/givethdirectory

  # Start Node.js
  node

  # Load the env.js script which automatically creates example data in the blockchain
  .load env.js
  ```

3. Start the dev server from the milestonetracker-ui directory.

  ```bash
  npm start
  ```

  Load [http://localhost:8080/](http://localhost:8080/) on your web browser.

Note that if you did not run the JSON-RPC in dtereministic mode, you will have to update dapp/js/blockchain/Network.js 'Testrpc' network object with the GivethDirectory address from the ouput of step 2.

```
  4: {
      title: "Testrpc",
      directory: new GivethDirectory(web3, "{update me}");
      campaignTrackerAddress: "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
      etherscan: "",
  },
```

### Production deployment
1. Run `npm run build` and upload `build/` to your server.
