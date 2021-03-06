import { web3 } from "./blockchain";

const websiteValidator = new RegExp([
    /^(https?:\/\/)/, // protocol
    /((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))/, // OR ip
    // (v4)
    // address
    /(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*/, // port and path
    /(\?[;&a-zA-Z\d%_.~+=-]*)?/, // query string
    /(#[-a-zA-Z\d_]*)?$/, // fragment locater
].map(r => r.source).join(""));

/**
 * Checks if the value is a website
 *
 * @param{any} value Value to be checked
 *
 * @return{bool} True if value is a valid website, otherwise false
 */
export const website = value => websiteValidator.test(value);

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
export const ethereumAddress = value => web3.isAddress(value);
