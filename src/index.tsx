import './tailwind.css';
import * as ReactDOM from 'react-dom/client';
import React from 'react';

import { App } from './App';

// Handling redirection from 404.html
(function handleRedirection() {
  const redirect = sessionStorage.getItem('redirect');
  sessionStorage.removeItem('redirect');
  if (redirect && redirect !== window.location.href) {
    window.history.replaceState(null, '', redirect);
  }
})();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
