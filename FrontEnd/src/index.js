import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './styles/global';

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
