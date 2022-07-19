import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultJson = require('./resources/locale-en-ca.json');

root.render(
  <React.StrictMode>
    <App json = {defaultJson}></App>
  </React.StrictMode>
);