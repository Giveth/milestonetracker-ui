import { givethDirectory } from "../../../blockchain";

/**
 *
 */
export default (campaignID, ownr, val) => () => {
    givethDirectory.donate(
        {
            idCampaign: campaignID,
            owner: ownr,
            value: val,
        });
};
