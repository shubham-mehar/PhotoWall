import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter><Main /></BrowserRouter>
  </React.StrictMode>
);