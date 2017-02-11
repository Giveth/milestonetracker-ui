import { web3 } from "./blockchain";

const websiteValidator =
    RegExp(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/);

/**
 * Checks if the value is a website
 *
 * @param{any} value Value to be checked
 *
 * @return{bool} True if value is a valid website, otherwise false
 */
export const website = (value) => websiteValidator.test(value);

/**
 * Checks if the value is nonepmty
 *
 * @param{any} value Value to be checked
 *
 * @return{bool} True if value is not empty, otherwise false
 */
export const any = (value) => {
    if (value) {
        return true;
    }

    return false;
};

/**
 * Checks if the value is a valid ethereum address
 *
 * @param{any} value Value to be checked
 *
 * @return{bool} True if value is a valid ethereum address, otherwise false
 */
export const ethereumAddress = (value) => web3.isAddress(value);
