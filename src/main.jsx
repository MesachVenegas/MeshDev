import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { inject } from '@vercel/analytics';
import store from './store';
import App from './App.jsx';
import React from 'react'
import './index.css';

inject();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
