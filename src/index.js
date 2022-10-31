import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Setcontext } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Setcontext>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Setcontext>
  </React.StrictMode>
);


