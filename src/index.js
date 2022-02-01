import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import DataClient from './components/dataclient/DataClient.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DataClient />
  </React.StrictMode>,
  document.getElementById('root')
);

