/*
* @Author: CC
* @Date:   2015-12-29 14:17:40
* @Last Modified by:   CC
* @Last Modified time: 2015-12-29 18:21:12
*/

'use strict';

import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }

    render() {
        return (
            <div>
                <h1>Demo</h1>
                <section>
                    <Link to='/home'>Home</Link>
                    { ' - ' }
                    <Link to='/about'>About</Link>
                    { ' - ' }
                    <Link to='/counters'>Counters</Link>
                </section>
                <br/>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default App;
