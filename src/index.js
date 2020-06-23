import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IRoute from './page/route_demo/demo1/router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <IRoute />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
