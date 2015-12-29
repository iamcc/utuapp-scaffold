/*
* @Author: CC
* @Date:   2015-12-29 17:23:58
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:22:03
*/

'use strict';

import { SET_COUNTER, INC_COUNTER, DEC_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
    switch (action.type) {
        case SET_COUNTER:
            return action.payload;
        case INC_COUNTER:
            return state + 1;
        case DEC_COUNTER:
            return state - 1;
        default:
            return state;
    }
}
