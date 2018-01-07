import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'

import userInfo from './userInfo';
import shop from './shop';

export default combineReducers({
  userInfo,
  shop,
  loadingBar: loadingBarReducer,
})
