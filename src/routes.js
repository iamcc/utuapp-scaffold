/*
* @Author: CC
* @Date:   2015-12-29 12:34:33
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 17:53:50
*/

'use strict';

import React from 'react';
import App from './containers/app';
import About from './containers/about';
import Home from './containers/home';
import Counters from './containers/counters';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'counters', component: Counters },
  ],
};

export default routes;
