import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Giveth.io</a>
                    {/* <LinkContainer to={ { pathname: "/" } }>
                        <NavItem>Giveth.io</NavItem>
                    </LinkContainer> */}
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to={ { pathname: "/campaigns" } }>
                    <NavItem>Campaigns</NavItem>
                </LinkContainer>
                <LinkContainer to={ { pathname: "/myaccount" } }>
                    <NavItem>My Account</NavItem>
                </LinkContainer>
                <LinkContainer to={ { pathname: "/campaigndeployer" } }>
                    <NavItem>Campaign Deployer</NavItem>
                </LinkContainer>
                <LinkContainer to={ { pathname: "/about" } }>
                    <NavItem href="#">About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
}
