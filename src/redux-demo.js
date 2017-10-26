import { createStore } from 'redux';

export default function () {
  // reducer
  function counter(state = 0, action) {
    switch (action.type) {
      case 'ADD':
        return state + 1
      case 'MINUTES':
        return state - 1
      default:
        return state
    }
  }

  let store = createStore(counter)

  store.subscribe(() => {
    console.log('state:', store.getState())
  })

  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'MINUTES' });
}
