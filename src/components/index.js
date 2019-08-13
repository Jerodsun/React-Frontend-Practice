import React from "react";
import CurrencySampler from './currency-example';
import PanelBox from './random-box';

// export {
//     CurrencySampler
// };
// no default

export default class CurrencyComponent extends React.Component {
    state = {
        total: null,
        next: null,
    };
    render() {
        return (
            <div className="component-app">
                <PanelBox value={this.state.next || this.state.total || "0"} />
                <CurrencySampler/>
            </div>
        )
    }

}
