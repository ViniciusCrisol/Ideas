import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes/index.js';
import history from './services/history';

import { store, persistor } from './store';

import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
