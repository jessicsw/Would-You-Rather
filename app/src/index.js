import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './frontend/store';
import Root from './frontend/components/root';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Root store={store} />
  </HashRouter>,
  document.getElementById('root')
);
