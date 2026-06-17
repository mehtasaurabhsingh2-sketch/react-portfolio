import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import global styles
import '../public/css/style.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
