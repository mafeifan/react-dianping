import React from 'react';
import ReactDOM from 'react-dom';
import ReduxDemo from './containers/ReduxDemo';
import { RouterMap } from './router/routerMap';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import PrimaryLayout from './pages/Layout/PrimaryLayout';

import './static/styl/index.styl';

const store = configStore();

fetch('/api/homead')
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })

ReactDOM.render(<Provider store={store}>
  <div>
    <PrimaryLayout>
      <RouterMap />
      <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png" alt=""/>
    </PrimaryLayout>
    { /* <ReduxDemo></ReduxDemo> */ }
  </div>
</Provider>, document.getElementById('root'));
