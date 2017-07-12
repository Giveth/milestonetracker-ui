import { userActions } from "../constants";

export default function setAccount(data) {
    return {
        type: userActions.SET_ACCOUNT,
        payload: { data },
    };
}
