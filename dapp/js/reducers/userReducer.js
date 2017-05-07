/* eslint-disable */
import { userActions } from '../constants';

export function userAccount(state = '', action) {
  switch(action.type) {
    case userActions.SET_ACCOUNT:
      return action.payload.data;
    default: return state;
  }
}
