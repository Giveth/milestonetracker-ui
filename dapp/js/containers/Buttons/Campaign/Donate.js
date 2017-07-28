import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonDonate from "../../../components/ButtonDonate";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        onDonate: CampaignActions.donate,
    },
    dispatch
);

const Donate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonDonate);

export default Donate;
