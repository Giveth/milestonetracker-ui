import { connect } from "react-redux";
import { AboutPage } from "../pages";
import { proposeMilestones } from "../actions";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});

const AboutPageContainer = connect(
    mapStateToProps,
    { onProposeMilestones: proposeMilestones }
)(AboutPage);

export default AboutPageContainer;
