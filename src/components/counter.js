/*
* @Author: CC
* @Date:   2015-12-29 17:52:55
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:30:49
*/

'use strict';

import React from 'react';
import { ButtonArea, Button } from 'react-weui';
import 'weui';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Counter';
    }

    render() {
        const { increment, decrement, incrementAsync, counter } = this.props;
        return (
            <div>
                Clicked: {counter}
                {' '}
                <ButtonArea>
                    <Button type='primary' onClick={increment}>+</Button>
                    <Button type='warn' onClick={decrement}>-</Button>
                </ButtonArea>
                {' '}
                <Button type='default'
                        onClick={() => incrementAsync()}>
                    inc async
                </Button>
            </div>
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
