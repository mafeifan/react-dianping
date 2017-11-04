import { actionTypes } from '../actionTypes/shop';

export function add(data) {
  return {
    type: actionTypes.SHOP_ADD,
    data
  }
}

export function del(data) {
  return {
    type: actionTypes.SHOP_DEL,
    data
  }
}

export function update(data) {
  return {
    type: actionTypes.SHOP_UPDATE,
    data
  }
}
