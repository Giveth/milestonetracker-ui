/* eslint-disable */
import { userActions } from '../constants';

export function setAccount(data) {
    return {
        type: userActions.SET_ACCOUNT,
        payload: { data }
    }
}
