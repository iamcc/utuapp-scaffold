/*
* @Author: CC
* @Date:   2015-12-29 14:25:18
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:22:17
*/

'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import counter from './counter';

const rootReducer = combineReducers({
    routing: routeReducer,
    counter,
});

export default rootReducer;
