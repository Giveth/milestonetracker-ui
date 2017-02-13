import { givethDirectory } from "../../../blockchain";

/**
 *
 */
export const donate =
(campaignID, ownr, val) => () => {
    givethDirectory.donate(
        {
            idCampaign: campaignID,
            owner: ownr,
            value: val,
        });
};
