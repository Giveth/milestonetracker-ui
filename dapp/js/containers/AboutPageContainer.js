import { connect } from "react-redux";
import { AboutPage } from "../pages";
import { proposeMilestones, unproposeMilestones } from "../actions";

const mapStateToProps = (state) => ({
    givethDirectoryState: state.givethDirectory,
});
const mapDispatchToProps = (
    {
        onProposeMilestones: proposeMilestones,
        onUnproposeMilestones: unproposeMilestones,
    }
);

const AboutPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutPage);

export default AboutPageContainer;
