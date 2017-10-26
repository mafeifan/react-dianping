import { actionTypes } from '../mutation-types/userInfo';

export function login(data) {
  return {
    type: actionTypes.USERINFO_LOGIN,
    data
  }
}

export function update(data) {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}
