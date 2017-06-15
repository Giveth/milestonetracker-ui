import { userActions } from "../constants";

export default function userAccount(state = "", action) {
    switch (action.type) {

    case userActions.SET_ACCOUNT:
        return action.payload.data;

    default: return state;
    }
}
