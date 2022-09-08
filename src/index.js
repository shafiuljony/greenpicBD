import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles'
import Typography from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyles />
  <Typography />
    <App />
  </>
);
