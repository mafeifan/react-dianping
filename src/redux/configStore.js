import { createStore } from 'redux'
import reducers from './reducers'

export default function configStore(preLoadedState) {
  return createStore(reducers, preLoadedState,
    // https://github.com/zalmoxisus/redux-devtools-extension#usage
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
