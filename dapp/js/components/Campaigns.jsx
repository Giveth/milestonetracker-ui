/**
 * List of campaigns with a search option
 *
 * Expects following properties:
 * @prop{string} campaigns   Array of campaigns
 * @prop{string} dataLoaded  Boolean to indicate if data has been already read from blockchain
 */

import React from "react";
import PropTypes from "prop-types";

import { SearchBar, CampaignSmall, BlockChainContent } from "./";

export default class CampaignsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(text) {
        this.setState({
            search: text.toLowerCase(),
        });
    }

    render() {
        const campaigns = this.props.campaigns
            .filter(campaign => (
                campaign.name.toLowerCase().includes(this.state.search) ||
                campaign.description.toLowerCase().includes(this.state.search)
            ))
            .map((campaign, index) => (
                <CampaignSmall
                  key={index.toString()}
                  url={`/campaigns/${ index }`}
                  name={campaign.name}
                  description={campaign.description}
                />
            ));

        return (
            <BlockChainContent
              loaded={this.props.loaded}
            >
                <SearchBar
                  filterText={this.state.search}
                  onUserInput={this.handleUserInput}
                  placeholder="Search in campaigns"
                />
                { campaigns }
            </BlockChainContent>
        );
    }
 }

CampaignsPage.propTypes = {
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    loaded: PropTypes.bool.isRequired,
};

CampaignsPage.defaultProps = {
    campaigns: [],
};
