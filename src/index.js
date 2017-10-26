import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './demo.styl';
import ReduxDemo from './containers/ReduxDemo';
import { RouterMap } from './router/routerMap';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import PrimaryLayout from './pages/Layout/PrimaryLayout';

const store = configStore();

fetch('/api/homead')
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })

ReactDOM.render(<Provider store={store}>
  <div>
    <ReduxDemo></ReduxDemo>
    <PrimaryLayout>
      <RouterMap />
    </PrimaryLayout>
  </div>
</Provider>, document.getElementById('root'));
