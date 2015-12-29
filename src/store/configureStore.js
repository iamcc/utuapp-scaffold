/*
* @Author: CC
* @Date:   2015-12-29 14:14:38
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 15:36:31
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import debug from 'debug';

const storeDebug = debug('app:store');
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    storeDebug('hot reducers!');
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}
