import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <App />
  </React.StrictMode>
);
