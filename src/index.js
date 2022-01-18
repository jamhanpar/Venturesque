import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { configureAppStore } from './store/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {

  let initialState = {};

  let store = configureAppStore(initialState);
  window.getState = store.getState();

  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );

})

