import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styl/main.scss";
import "./styl/anim.scss"; 

import Routing from './routing';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing  />
  </React.StrictMode>
);

