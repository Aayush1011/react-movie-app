import React from 'react';
// import ReactDOM from 'react-dom';
import createRoot from 'react-dom'
import App from './App';

createRoot.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
