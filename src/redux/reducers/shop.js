import { actionTypes } from '../actionTypes/shop';

const initialState = []

export default function shop (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOP_ADD:
      state.unshift(action.data)
      return state
    case actionTypes.SHOP_UPDATE:
      return action.data
    case actionTypes.SHOP_DEL:
      return state.filter(item => {
        if (item.id !== action.data.id) {
          return item
        }
      })
    default:
      return state
  }
}
