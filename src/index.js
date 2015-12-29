/*
* @Author: CC
* @Date:   2015-12-29 12:38:05
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 17:16:31
*/

'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import debug from 'debug';
import createHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import routes from './routes';

window.React = React;

const indexDebug = debug('app:index');
const rootEl = document.getElementById('app');

if (process.env.NODE_ENV !== 'production') {
  debug.enable('app:*');
}

const store = configureStore(window.__INITIAL_STATE__);
const history = createHistory();

syncReduxAndRouter(history, store);
indexDebug('sync redux and router!');

render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  rootEl
);
