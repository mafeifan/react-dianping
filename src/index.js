import React from 'react';
import ReactDOM from 'react-dom';
import { RouterMap } from './router/routerMap';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import PrimaryLayout from '$pages/Layout/PrimaryLayout';

import './static/styl/index.styl';

const store = configStore();

ReactDOM.render(<Provider store={store}>
  <div>
    <PrimaryLayout>
      <RouterMap />
    </PrimaryLayout>
  </div>
</Provider>, document.getElementById('root'));
