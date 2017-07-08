import React from "react";
// import PropTypes from "prop-types";
import { network } from "../blockchain";
import { TableDetails } from "./";

const About = () => {
    const general = [
        {
            label: "Network",
            content: network.title,
        },
        {
            label: "Address",
            content: network.campaignTrackerAddress,
        },
        {
            label: "EtherScan prefix",
            content: network.etherscan,
        },
    ];

    return (
        <div>
            <h1>About</h1>
            <TableDetails data={general} />
        </div>
    );
};

About.propTypes = {
    // givethDirectoryState: PropTypes.object.isRequired,
};

export default About;
