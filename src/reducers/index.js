/*
* @Author: CC
* @Date:   2015-12-29 14:25:18
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 14:26:32
*/

'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

const rootReducer = combineReducers({
  routing: routeReducer,
});

export default rootReducer;
