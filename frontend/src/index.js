import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new root API
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use the new root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
