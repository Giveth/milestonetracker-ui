import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { network } from "../blockchain";

const NavigationComponent = (props) => {
    const web3state = props.web3state;
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="https://giveth.io">Giveth.io</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to={{ pathname: "/campaigns" }}>
                    <NavItem>Campaigns</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: "/myaccount" }}>
                    <NavItem>My Account</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: "/campaigndeployer" }}>
                    <NavItem>Campaign Deployer</NavItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: "/about" }}>
                    <NavItem href="#">About</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    { network.title }
                </NavItem>
                {
                    web3state.syncing ?
                        <NavItem href="#">
                            { web3state.syncCurrentBlock }
                            /{ web3state.syncHighestBlock }
                        </NavItem>
                        :
                        <NavItem href="#">
                            Synced
                        </NavItem>
                }
            </Nav>
        </Navbar>
    );
};

NavigationComponent.propTypes = {
    web3state: PropTypes.shape({}).isRequired,
};

export default NavigationComponent;
