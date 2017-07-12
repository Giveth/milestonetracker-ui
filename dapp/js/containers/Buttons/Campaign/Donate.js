import { connect } from "react-redux";
import ButtonDonate from "../../../components/ButtonDonate";
import * as CampaignActions from "../../../actions/campaignActions";

const mapStateToProps = () => ({
});

const mapDispatchToProps = (
    {
        onDonate: CampaignActions.donate,
    }
);

const Donate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonDonate);

export default Donate;
