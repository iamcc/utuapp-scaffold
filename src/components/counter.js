/*
* @Author: CC
* @Date:   2015-12-29 17:52:55
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:08:20
*/

'use strict';

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Counter';
  }

  render() {
    const { increment, decrement, incrementAsync, counter } = this.props;
    return (
      <p>
        Clicked: {counter}
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={() => incrementAsync()}>inc async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  incrementAsync: React.PropTypes.func.isRequired,
  counter: React.PropTypes.number.isRequired,
};

export default Counter;
