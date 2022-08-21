import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './store/store';

import './index.scss';
// import "./assets/booty/css/bootstrap.css";
// import "./assets/booty/style.css";
// import "./assets/booty/css/dark.css";
// import "./assets/booty/css/font-icons.css";
// import "./assets/booty/css/animate.css";
// import "./assets/booty/css/magnific-popup.css";

// import "./assets/booty/css/custom.css";
	

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);