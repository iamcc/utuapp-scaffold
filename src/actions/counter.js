/*
* @Author: CC
* @Date:   2015-12-29 17:20:34
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:07:36
*/

'use strict';

export const SET_COUNTER = 'SET_COUNTER';
export const INC_COUNTER = 'INC_COUNTER';
export const DEC_COUNTER = 'DEC_COUNTER';

export function set(val) {
  return {
    type: SET_COUNTER,
    payload: val,
  };
}

export function increment() {
  return { type: INC_COUNTER };
}

export function decrement() {
  return { type: DEC_COUNTER };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
