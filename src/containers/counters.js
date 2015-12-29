/*
* @Author: CC
* @Date:   2015-12-29 16:46:58
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 17:57:22
*/

'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter';
import * as CounterActions from '../actions/counter';

class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Counters';
  }

  render() {
    return <Counter {...this.props}/>;
  }
}

export default connect(
  state => ({counter: state.counter}),
  dispatch => { return bindActionCreators(CounterActions, dispatch) }
)(Counters);
