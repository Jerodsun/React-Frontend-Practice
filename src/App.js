import React, { Component } from 'react';

import CurrencySampler from './components/index';

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
                <CurrencySampler/>
            </main>
        )
    }
}


export default Wrapper;
