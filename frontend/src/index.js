import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <style>{`
      .floating-shapes {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
      }
      
      .shape {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.3;
        z-index: -1;
      }
      
      .circle-blue {
        width: 400px;
        height: 400px;
        background: #4c6ef5;
        top: 10%;
        left: 5%;
        animation: float 12s ease-in-out infinite;
      }
      
      .circle-teal {
        width: 300px;
        height: 300px;
        background: #3bc9db;
        bottom: 15%;
        right: 10%;
        animation: float 14s ease-in-out infinite;
        animation-delay: 2s;
      }
      
      .blob {
        width: 500px;
        height: 500px;
        background: #7950f2;
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
        top: 40%;
        right: 20%;
        animation: float 16s ease-in-out infinite;
        animation-delay: 1s;
      }
    `}</style>
  </React.StrictMode>
);

reportWebVitals();