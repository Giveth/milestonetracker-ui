import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonAcceptMilestones from "../../../components/ButtonAcceptMilestones";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = state => ({
    disabled: !state.givethDirectory.loaded,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            onAcceptMilestones: CampaignActions.acceptMilestones,
        },
        dispatch,
    );
}

const AcceptMilestones = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonAcceptMilestones);

export default AcceptMilestones;
