import { combineReducers } from 'redux';

import userInfo from './userInfo';
import shop from './shop';

export default combineReducers({
  userInfo,
  shop
})
