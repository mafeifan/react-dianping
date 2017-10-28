import React from 'react';
import ReactDOM from 'react-dom';
import ReduxDemo from './demos/ReduxDemo';
import { RouterMap } from './router/routerMap';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import PrimaryLayout from './pages/Layout/PrimaryLayout';

import './static/styl/index.styl';

const store = configStore();

ReactDOM.render(<Provider store={store}>
  <div>
    <PrimaryLayout>
      <RouterMap />
    </PrimaryLayout>
    { /* <ReduxDemo></ReduxDemo> */ }
  </div>
</Provider>, document.getElementById('root'));
