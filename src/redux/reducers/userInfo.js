
import { actionTypes } from '../actionTypes/userInfo';

const initialState = []
export default function userInfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_LOGIN:
      return action.data
    case actionTypes.USERINFO_UPDATE:
      return action.data
    case actionTypes.USERINFO_ADD:
      state.unshift(action.data)
      return state
    case actionTypes.USERINFO_DEL:
      return state.filter(item => {
        if (item.id !== action.data.id) {
          return item
        }
      })
    default:
      return state
  }
}
