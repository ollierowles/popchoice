import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OutputContextProvider from './contexts/OutputContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OutputContextProvider>
      <App />
    </OutputContextProvider>
  </React.StrictMode>
);