import { network } from "../../../blockchain";

/**
 *
 */
export default (campaignID, ownr, val) => () => {
    network.directory.donate(
        {
            idCampaign: campaignID,
            owner: ownr,
            value: val,
        });
};
