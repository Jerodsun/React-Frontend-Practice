import React, { Component } from 'react';

import CurrencyComponent from './components/index'; //this will need to change soon for tree-style inheritance

// a conscious decision to put JSX here?

const clickme = (
    <h3 className= "text-primary text-uppercase" shadowSize={2}>
  Click Me
</h3>
);
class Wrapper extends Component {
    render() {
        return (
            <main className="content">
                <h1 className="text-primary text-uppercase">This is a title</h1>
                {clickme}
                <CurrencyComponent/>
            </main>
        )
    }
}


export default Wrapper;
